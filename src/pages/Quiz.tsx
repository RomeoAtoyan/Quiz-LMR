import QuizView from "../components/layout/QuizView";
import Sidebar from "../components/layout/Sidebar";

const Quiz = () => {
  return (
    <div className="h-full p-6 bg-primary">
      <div className="w-full h-full grid grid-cols-12 gap-6 p-4">
        <Sidebar />
        <div className="col-span-8 bg-secondary rounded-xl overflow-hidden p-4">
          <QuizView />
        </div>
      </div>
    </div>
  );
};

export default Quiz;
