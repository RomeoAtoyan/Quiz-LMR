import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import { ROUTES } from "./routes";

const Home = () => {
  return (
    <div className="bg-primary h-full flex flex-col gap-4 items-center justify-center">
      <h1 className="text-8xl font-bold text-white">Drukkerij Quiz</h1>
      <Link to={ROUTES.QUIZ}>
        <Button className="px-12">Start</Button>
      </Link>
    </div>
  );
};

export default Home;
