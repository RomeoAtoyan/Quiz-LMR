import { motion, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { useQuizStore } from "../../store/useQuizStore";

const EyeFollower = () => {
  const isSubmitted = useQuizStore((state) => state.isSubmitted);
  const selectedAnswers = useQuizStore((state) => state.selectedAnswers);
  const currentAnswers = useQuizStore((state) => state.currentAnswers);

  const correctAnswers = currentAnswers
    .filter((a) => a.correct)
    .map((a) => a.answer);

  const isPerfect =
    isSubmitted &&
    selectedAnswers.length === correctAnswers.length &&
    selectedAnswers.every((a) => correctAnswers.includes(a));
  const containerRef = useRef<HTMLDivElement>(null);

  const xSpring = useSpring(0, { stiffness: 300, damping: 15 });
  const ySpring = useSpring(0, { stiffness: 300, damping: 15 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
      
      const maxDisplacement = 6;
      
      const moveX = (deltaX / (distance || 1)) * Math.min(distance / 10, maxDisplacement);
      const moveY = (deltaY / (distance || 1)) * Math.min(distance / 10, maxDisplacement);
      
      xSpring.set(moveX);
      ySpring.set(moveY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [xSpring, ySpring]);

  return (
    <div 
      ref={containerRef}
      className={`relative w-28 h-28 bg-[#FFE200] rounded-full border-[6px] border-white flex flex-col items-center justify-center shadow-xl overflow-hidden transition-transform duration-500 ${isPerfect ? "scale-110" : ""}`}
    >
      <div className="absolute top-2 left-4 w-12 h-6 bg-white/40 rounded-full rotate-[-20deg] blur-[2px]" />
      
      <div className="relative flex gap-3 z-10 mb-1">
        <div className="w-9 h-9 flex items-center justify-center">
          {isPerfect ? (
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-8 h-8 border-t-4 border-primary-shadow/60 rounded-full mt-4"
            />
          ) : (
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-black/5 shadow-inner">
              <motion.div 
                style={{ x: xSpring, y: ySpring }}
                className="w-5 h-5 bg-[#004475] rounded-full flex items-center justify-center"
              >
                <div className="w-1.5 h-1.5 bg-white rounded-full -translate-x-1 -translate-y-1" />
              </motion.div>
            </div>
          )}
        </div>
        
        <div className="w-9 h-9 flex items-center justify-center">
          {isPerfect ? (
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-8 h-8 border-t-4 border-primary-shadow/60 rounded-full mt-4"
            />
          ) : (
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-black/5 shadow-inner">
              <motion.div 
                style={{ x: xSpring, y: ySpring }}
                className="w-5 h-5 bg-[#004475] rounded-full flex items-center justify-center"
              >
                <div className="w-1.5 h-1.5 bg-white rounded-full -translate-x-1 -translate-y-1" />
              </motion.div>
            </div>
          )}
        </div>
      </div>
      
      <div className="flex gap-12 absolute top-16">
        <div className="w-4 h-2 bg-red-400/30 rounded-full blur-[1px]" />
        <div className="w-4 h-2 bg-red-400/30 rounded-full blur-[1px]" />
      </div>

      <motion.div 
        animate={isPerfect ? { height: 16, width: 40, borderBottomWidth: 6 } : { height: 4, width: 32, borderBottomWidth: 4 }}
        className="border-b-4 border-black/20 rounded-full"
        style={{ marginTop: "4px" }}
      />
    </div>
  );
};

export default EyeFollower;
