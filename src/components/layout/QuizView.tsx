import { motion, AnimatePresence } from "framer-motion";
import { useQuizStore } from "../../store/quiz.schema";
import { useQuizTimer } from "../../hooks/useQuizTimer";
import QuizAnswers from "../quiz/QuizAnswers";
import QuizTimer from "../quiz/QuizTimer";
import TimeOutOverlay from "../quiz/TimeOutOverlay";
import Button from "../ui/Button";

const QuizView = () => {
  const currentQuestionTitle = useQuizStore((state) => state.currentQuestionTitle);
  const isSelectionComplete = useQuizStore((state) => state.isSelectionComplete);
  const isSubmitted = useQuizStore((state) => state.isSubmitted);
  const submitAnswer = useQuizStore((state) => state.submitAnswer);
  const nextQuestion = useQuizStore((state) => state.nextQuestion);
  const { isTimeOut } = useQuizTimer();

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
        className={`flex flex-col gap-4 bg-secondary h-full transition-all duration-700 ${
          isTimeOut ? "blur-md grayscale-[0.5]" : ""
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
              <h3 className="text-center text-white text-3xl leading-tight font-black max-w-2xl mx-auto py-6 tracking-tight [text-shadow:2px_2px_0px_rgba(0,0,0,0.2)]">
                {currentQuestionTitle}
              </h3>
              
              <div className="px-12 space-y-12 flex-grow">
                <QuizAnswers />

                <div className="flex flex-col justify-center gap-4 max-w-xl mx-auto">
                  <Button
                    variant={isSelectionComplete ? "primary" : "disabled"}
                    onClick={handleAction}
                  >
                    {isSubmitted ? "Doorgaan" : "Klaar!"}
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
