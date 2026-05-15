import { motion } from "framer-motion";
import { useQuizStore } from "../../store/quiz.schema";
import { useQuizTimer } from "../../hooks/useQuizTimer";
import QuizAnswers from "../quiz/QuizAnswers";
import QuizTimer from "../quiz/QuizTimer";
import TimeOutOverlay from "../quiz/TimeOutOverlay";
import Button from "../ui/Button";

const QuizView = () => {
  const currentQuestionTitle = useQuizStore((state) => state.currentQuestionTitle);
  const isSelectionComplete = useQuizStore((state) => state.isSelectionComplete);
  const { isTimeOut } = useQuizTimer();

  return (
    <div className="relative h-full">
      <TimeOutOverlay />

      <div
        className={`flex flex-col gap-4 bg-secondary h-full transition-all duration-700 ${
          isTimeOut ? "blur-md grayscale-[0.5]" : ""
        }`}
      >
        <div className="flex flex-col gap-4 bg-primary-shadow rounded-lg h-full p-4">
          <QuizTimer />

          <motion.h3
            key={currentQuestionTitle}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white text-3xl leading-tight font-black max-w-2xl mx-auto py-6 tracking-tight [text-shadow:2px_2px_0px_rgba(0,0,0,0.2)]"
          >
            {currentQuestionTitle}
          </motion.h3>
          <div className="px-12 space-y-12">
            <QuizAnswers />

            <div className="flex flex-col justify-center gap-4 max-w-xl mx-auto">
              <Button variant={isSelectionComplete ? "primary" : "disabled"}>
                Klaar!
              </Button>
              <Button variant="white">Geef me een tip</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizView;
