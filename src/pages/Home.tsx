import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import { ROUTES } from "./routes";

const Home = () => {
  return (
    <div className="bg-primary h-full flex flex-col gap-8 items-center justify-center p-6 text-center">
      <h1 className="text-5xl md:text-8xl font-bold text-white [text-shadow:var(--text-shadow-outline)]">Drukkerij Quiz</h1>
      <Link to={ROUTES.QUIZ}>
        <Button className="px-12 py-4">Start</Button>
      </Link>
    </div>
  );
};

export default Home;
