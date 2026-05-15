import { motion, AnimatePresence } from "framer-motion";
import { Timer } from "lucide-react";
import { useQuizStore } from "../../store/quiz.schema";
import { useQuizTimer } from "../../hooks/useQuizTimer";
import Button from "../ui/Button";

const TimeOutOverlay = () => {
  const { isTimeOut } = useQuizTimer();
  const nextQuestion = useQuizStore((state) => state.nextQuestion);

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
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-500">
              <Timer size={40} strokeWidth={2.5} />
            </div>
            <h2 className="text-primary text-3xl font-black [text-shadow:2px_2px_0px_rgba(0,0,0,0.1)]">
              Oei, je tijd is om!
            </h2>
            <p className="text-primary-shadow font-bold">
              Je was net te traag. Geen zorgen, probeer de volgende vraag!
            </p>
            <Button onClick={() => nextQuestion()} className="w-full">
              Volgende vraag
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TimeOutOverlay;
