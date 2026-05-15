import { motion, AnimatePresence } from "framer-motion";
import { Timer } from "lucide-react";
import { useQuizTimer } from "../../hooks/useQuizTimer";

const QuizTimer = () => {
  const { isLowTime, formattedTime } = useQuizTimer();

  return (
    <motion.div
      animate={
        isLowTime
          ? {
              backgroundColor: "#ef4444",
              color: "#ffffff",
              x: [0, -2, 2, -2, 2, 0],
            }
          : {
              backgroundColor: "#ffffff",
              color: "#004475",
              x: 0,
            }
      }
      transition={
        isLowTime
          ? {
              x: {
                repeat: Infinity,
                duration: 0.4,
              },
              backgroundColor: { duration: 0.3 },
            }
          : { duration: 0.3 }
      }
      className="mx-auto inline-flex items-center justify-center px-6 py-2 rounded-full font-bold shadow-[0_4px_0px_rgba(0,0,0,0.1)]"
    >
      <Timer size={20} className="mr-2" />
      <div className="flex items-center font-mono font-black text-lg tracking-widest">
        {formattedTime.split("").map((char, index) => (
          <div
            key={index}
            className="relative overflow-hidden h-[1.5em] flex items-center"
            style={{ width: char === ":" ? "0.3em" : "0.6em" }}
          >
            <AnimatePresence mode="popLayout">
              <motion.span
                key={`${index}-${char}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 35,
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {char}
              </motion.span>
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default QuizTimer;
