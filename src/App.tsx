import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ROUTES } from "./pages/routes";
import Quiz from "./pages/Quiz";

const App = () => {
  return (
    <BrowserRouter>
      <main className="h-screen min-h-screen max-h-screen overflow-hidden">
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.QUIZ} element={<Quiz />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
