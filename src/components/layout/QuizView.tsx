import { motion, AnimatePresence } from "framer-motion";
import { useQuizStore } from "../../store/useQuizStore";
import { useQuizTimer } from "../../hooks/useQuizTimer";
import { useConfetti } from "../../hooks/useConfetti";
import QuizAnswers from "../quiz/QuizAnswers";
import QuizTimer from "../quiz/QuizTimer";
import TimeOutOverlay from "../quiz/TimeOutOverlay";
import Button from "../ui/Button";

const QuizView = () => {
  const currentQuestionTitle = useQuizStore((state) => state.currentQuestionTitle);
  const questionIndex = useQuizStore((state) => state.questionIndex);
  const quizData = useQuizStore((state) => state.quizData);
  const isSelectionComplete = useQuizStore((state) => state.isSelectionComplete);
  const isSubmitted = useQuizStore((state) => state.isSubmitted);
  const selectedAnswers = useQuizStore((state) => state.selectedAnswers);
  const currentAnswers = useQuizStore((state) => state.currentAnswers);
  const submitAnswer = useQuizStore((state) => state.submitAnswer);
  const nextQuestion = useQuizStore((state) => state.nextQuestion);
  const { isTimeOut } = useQuizTimer();

  const isLastQuestion = questionIndex === quizData.length - 1;

  const correctAnswers = currentAnswers
    .filter((a) => a.correct)
    .map((a) => a.answer);

  const isPerfect =
    isSubmitted &&
    selectedAnswers.length === correctAnswers.length &&
    selectedAnswers.every((a) => correctAnswers.includes(a));

  useConfetti(isPerfect);

  const handleAction = () => {
    if (isSubmitted) {
      nextQuestion();
    } else {
      submitAnswer();
    }
  };

  return (
    <div className="relative h-full overflow-hidden">
      <TimeOutOverlay />

      <div
        className={`flex flex-col gap-4 bg-secondary h-full transition-all duration-700 ${isTimeOut ? "blur-md grayscale-[0.5]" : ""
          }`}
      >
        <div className="flex flex-col gap-4 bg-primary-shadow rounded-lg h-full p-4 overflow-hidden">
          <QuizTimer />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestionTitle}
              initial={{ x: 500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -500, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex flex-col h-full"
            >
              <h3 className="text-center text-white text-2xl lg:text-3xl leading-tight font-black max-w-2xl mx-auto py-4 lg:py-6 tracking-tight [text-shadow:var(--text-shadow-outline)]">
                {currentQuestionTitle}
              </h3>

              <div className="px-2 lg:px-12 space-y-6 lg:space-y-12 flex-grow">
                <QuizAnswers />

                <div className="flex flex-col justify-center gap-4 max-w-xl mx-auto">
                  <Button
                    variant={isSelectionComplete ? "primary" : "disabled"}
                    onClick={() => {
                      if (isSelectionComplete || isSubmitted) {
                        handleAction();
                      }
                    }}
                  >
                    {isSubmitted
                      ? (isLastQuestion ? "Resultaten bekijken" : "Doorgaan")
                      : "Klaar!"}
                  </Button>
                  <Button variant="white">Geef me een tip</Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default QuizView;
