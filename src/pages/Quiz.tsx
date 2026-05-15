import Sidebar from "../components/layout/Sidebar";
import QuizView from "../components/quiz/QuizView";

const Quiz = () => {
  return (
    <div className="h-full p-6 bg-primary">
      <div className="w-full h-full grid grid-cols-12 gap-6 p-4">
        <Sidebar />
        <div className="col-span-8 bg-secondary rounded-xl">
          <QuizView />
        </div>
      </div>
    </div>
  );
};

export default Quiz;
