import { useEffect } from "react";
import QuizView from "../components/layout/QuizView";
import Sidebar from "../components/layout/Sidebar";
import { useQuizStore } from "../store/quiz.schema";

const Quiz = () => {
  const fetchQuiz = useQuizStore((state) => state.fetchQuiz);
  const decrementTime = useQuizStore((state) => state.decrementTime);

  const isSubmitted = useQuizStore((state) => state.isSubmitted);

  useEffect(() => {
    fetchQuiz();
  }, [fetchQuiz]);

  useEffect(() => {
    if (isSubmitted) return;

    const timer = setInterval(() => {
      decrementTime();
    }, 1000);
    return () => clearInterval(timer);
  }, [decrementTime, isSubmitted]);
  
  return (
    <div className="h-full p-6 bg-primary">
      <div className="w-full h-full grid grid-cols-12 gap-6 p-4">
        <Sidebar />
        <div className="col-span-8 bg-secondary rounded-2xl overflow-hidden p-6">
          <QuizView />
        </div>
      </div>
    </div>
  );
};

export default Quiz;
