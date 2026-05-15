import { motion } from "framer-motion";
import type { ReactNode, ButtonHTMLAttributes } from "react";

type QuizAnswerButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isSelected?: boolean;
  children?: ReactNode;
  className?: string;
};

const QuizAnswerButton = ({
  isSelected,
  children,
  className = "",
  ...props
}: QuizAnswerButtonProps) => {
  const { onDrag, onDragStart, onDragEnd, onAnimationStart, ...cleanProps } =
    props as any;

  return (
    <motion.button
      animate={{
        backgroundColor: isSelected ? "#2D89CC" : "#C2E2FE",
        color: isSelected ? "#FFFFFF" : "#004475",
        border: isSelected ? "2px solid #FFE200" : "4px solid rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`px-8 py-4 rounded-lg text-xl font-bold transition-transform active:scale-95 ${className}`}
      {...cleanProps}
    >
      {children}
    </motion.button>
  );
};

export default QuizAnswerButton;