import Badge from "../ui/Badge";

const QuizView = () => {
  return (
    <div className="flex flex-col gap-4 p-8 bg-secondary">
      <div className="flex gap-4">
        <Badge variant="white">
          <span className="mr-2">⏱️</span> 0:20
        </Badge>
      </div>
    </div>
  );
};

export default QuizView;
