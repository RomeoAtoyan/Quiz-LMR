import type { ReactNode, ButtonHTMLAttributes } from "react";

type QuizAnswerButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  className?: string;
};

const QuizAnswerButton = ({
  children,
  className = "",
  ...props
}: QuizAnswerButtonProps) => {
  return (
    <button
      className={`bg-answer-bg text-primary px-8 py-4 rounded-lg text-xl font-bold transition-all duration-150 ease-out hover:opacity-90 active:scale-95 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default QuizAnswerButton;