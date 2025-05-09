import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Quiz from "./components/Quiz";
import Home from "./components/Home";
import { QuizProvider } from "./context/QuizContext";

const App = () => (
  <QuizProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  </QuizProvider>
);

export default App;

