import { motion } from "framer-motion";
import type { ReactNode, ButtonHTMLAttributes } from "react";

type QuizAnswerButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isSelected?: boolean;
  isCorrect?: boolean;
  isSubmitted?: boolean;
  children?: ReactNode;
  className?: string;
};

const QuizAnswerButton = ({
  isSelected,
  isCorrect,
  isSubmitted,
  children,
  className = "",
  ...props
}: QuizAnswerButtonProps) => {
  const { onDrag, onDragStart, onDragEnd, onAnimationStart, ...cleanProps } =
    props as any;

  const green = "#17A500";
  const red = "#F05535";
  const yellow = "#FFE200";
  const selectedBlue = "#2D89CC";
  const defaultBlue = "#C2E2FE";
  const textBlue = "#004475";

  const getStyles = () => {
    if (isSubmitted) {
      if (isCorrect) {
        return {
          backgroundColor: "#FFFFFF",
          color: textBlue,
          border: `4px solid ${green}`,
        };
      }
      if (isSelected && !isCorrect) {
        return {
          backgroundColor: "#FFFFFF",
          color: textBlue,
          border: `4px solid ${red}`,
        };
      }
      return {
        backgroundColor: defaultBlue,
        color: textBlue,
        border: "4px solid rgba(0,0,0,0)",
        opacity: 0.6,
      };
    }

    return {
      backgroundColor: isSelected ? selectedBlue : defaultBlue,
      color: isSelected ? "#FFFFFF" : textBlue,
      border: isSelected ? `4px solid ${yellow}` : "4px solid rgba(0,0,0,0)",
      opacity: 1,
    };
  };

  return (
    <motion.button
      animate={getStyles()}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`px-8 py-4 rounded-lg text-xl font-bold transition-transform active:scale-95 shadow-[0_4px_0px_rgba(0,0,0,0.1)] ${className}`}
      {...cleanProps}
    >
      {children}
    </motion.button>
  );
};

export default QuizAnswerButton;