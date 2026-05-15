import { useQuizStore } from "../../store/quiz.schema";
import QuizAnswerButton from "./QuizAnswerButton";

const QuizAnswers = () => {
  const answers = useQuizStore((state) => state.currentAnswers);
  const selectedAnswers = useQuizStore((state) => state.selectedAnswers);
  const selectAnswer = useQuizStore((state) => state.selectAnswer);
  const isSubmitted = useQuizStore((state) => state.isSubmitted);

  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-6">
      {answers.map((a, index) => (
        <QuizAnswerButton
          isSelected={selectedAnswers.includes(a.answer)}
          isCorrect={a.correct}
          isSubmitted={isSubmitted}
          onClick={() => selectAnswer(a.answer)}
          key={index}
        >
          {a.answer}
        </QuizAnswerButton>
      ))}
    </div>
  );
};

export default QuizAnswers;
