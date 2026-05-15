import QuizAnswers from "../quiz/QuizAnswers";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

const QuizView = () => {
  return (
    <div className="flex flex-col gap-4 bg-secondary h-full">
      <div className="flex flex-col gap-4 bg-primary-shadow rounded-lg h-full p-2">
        <Badge variant="white" className="mx-auto">
          <span className="mr-2">⏱️</span> 0:20
        </Badge>

        <h3 className="text-center text-white text-[24px] leading-[1.2] font-bold max-w-2xl mx-auto py-4 [text-shadow:var(--text-shadow-outline)]">
          Duid de 3 taken aan die niet tot jou takenpakket behoren
        </h3>
        <div className="px-12 space-y-12">
          <QuizAnswers />

          <div className="flex flex-col justify-center gap-4 max-w-xl mx-auto">
            <Button variant="disabled">Klaar!</Button>
            <Button>Geef me een tip</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizView;
