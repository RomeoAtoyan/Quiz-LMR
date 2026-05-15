import { useQuizStore } from "../store/quiz.schema";

export const useQuizTimer = () => {
  const timeLeft = useQuizStore((state) => state.timeLeft);
  const quizData = useQuizStore((state) => state.quizData);

  return {
    timeLeft,
    isLowTime: timeLeft <= 5 && timeLeft > 0,
    isTimeOut: quizData.length > 0 && timeLeft === 0,
    formattedTime: `0:${timeLeft < 10 ? `0${timeLeft}` : timeLeft}`,
  };
};
