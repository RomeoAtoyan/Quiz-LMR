import QuizAnswerButton from "./QuizAnswerButton";

const QuizAnswers = () => {
  const answers = [
    "Factureren van prestaties",
    "Bestellen van kantoormateriaal",
    "Opstellen van verpleegkundige dossiers",
    "Beheer van de personeelsplanning",
    "Beheer van de personeelsplanning",
    "Beheer van de personeelsplanning",
    "Beheer van de personeelsplanning",
    "Beheer van de personeelsplanning",
    "Beheer van de personeelsplanning",
    "Beheer van de personeelsplanning",
  ];

  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-6">
      {answers.map((answer, index) => (
        <QuizAnswerButton key={index}>{answer}</QuizAnswerButton>
      ))}
    </div>
  );
};

export default QuizAnswers;