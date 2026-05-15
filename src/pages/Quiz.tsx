import { useEffect, useState } from "react";
import QuizView from "../components/layout/QuizView";
import Sidebar from "../components/layout/Sidebar";
import { useQuizStore } from "../store/useQuizStore";

const Quiz = () => {
  const [canStartTimer, setCanStartTimer] = useState(false);
  const fetchQuiz = useQuizStore((state) => state.fetchQuiz);
  const decrementTime = useQuizStore((state) => state.decrementTime);
  const isSubmitted = useQuizStore((state) => state.isSubmitted);

  useEffect(() => {
    fetchQuiz();

    const timer = setTimeout(() => {
      setCanStartTimer(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, [fetchQuiz]);

  useEffect(() => {
    if (isSubmitted || !canStartTimer) return;

    const timer = setInterval(() => {
      decrementTime();
    }, 1000);
    return () => clearInterval(timer);
  }, [decrementTime, isSubmitted, canStartTimer]);

  return (
    <div className="h-full p-2 lg:p-6 bg-primary overflow-y-auto">
      <div className="w-full min-h-full flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-6 p-2 lg:p-4">
        <Sidebar />
        <div className="w-full lg:col-span-8 bg-secondary rounded-2xl overflow-hidden p-4 lg:p-6 flex-grow">
          <QuizView />
        </div>
      </div>
    </div>
  );
};

export default Quiz;
