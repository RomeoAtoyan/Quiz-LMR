import { Timer, RefreshCw } from "lucide-react";
import Button from "../ui/Button";

interface QuizErrorProps {
  message: string;
  onRetry: () => void;
}

const QuizError = ({ message, onRetry }: QuizErrorProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6 bg-primary-shadow rounded-lg border-2 border-red-500/30">
      <Timer className="text-red-500 w-16 h-16 mb-6" />
      
      <h3 className="text-white text-2xl font-black mb-4 [text-shadow:var(--text-shadow-outline)]">
        Oeps!
      </h3>
      
      <p className="text-white/80 text-lg mb-8 max-w-md mx-auto leading-relaxed">
        {message}
      </p>

      <Button variant="primary" onClick={onRetry} className="group">
        <RefreshCw className="mr-2 group-hover:rotate-180 transition-transform duration-500" size={20} />
        Probeer het opnieuw
      </Button>
    </div>
  );
};

export default QuizError;
