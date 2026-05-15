import { motion, AnimatePresence } from "framer-motion";
import { Timer } from "lucide-react";
import { useQuizStore } from "../../store/quiz.schema";
import { useQuizTimer } from "../../hooks/useQuizTimer";
import Button from "../ui/Button";

const TimeOutOverlay = () => {
  const { isTimeOut } = useQuizTimer();
  const questionIndex = useQuizStore((state) => state.questionIndex);
  const quizData = useQuizStore((state) => state.quizData);
  const nextQuestion = useQuizStore((state) => state.nextQuestion);
  
  const isLastQuestion = questionIndex === quizData.length - 1;

  return (
    <AnimatePresence>
      {isTimeOut && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 z-50 flex items-center justify-center bg-primary/20 backdrop-blur-md rounded-2xl"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-8 rounded-3xl shadow-2xl flex flex-col items-center gap-6 text-center max-w-sm mx-4"
          >
            <div className="text-primary">
              <Timer size={48} strokeWidth={2.5} />
            </div>
            <h2 className="text-primary text-3xl font-black [text-shadow:2px_2px_0px_rgba(0,0,0,0.1)]">
              Oei, je tijd is om!
            </h2>
            <p className="text-primary-shadow font-bold">
              Je was net te traag. Geen zorgen, {isLastQuestion ? "bekijk je resultaten!" : "probeer de volgende vraag!"}
            </p>
            <Button onClick={() => nextQuestion()} className="w-full">
              {isLastQuestion ? "Bekijk resultaten" : "Volgende vraag"}
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TimeOutOverlay;
