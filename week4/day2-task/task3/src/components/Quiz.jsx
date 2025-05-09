import { useQuiz } from "../context/QuizContext";
import { 
  Button, 
  Radio, 
  RadioGroup, 
  FormControlLabel, 
  FormControl, 
  FormLabel 
} from '@mui/material';
import QuestionItem from "./QuestionItem";

const Quiz = () => {
  const { questions, score, calculateScore } = useQuiz();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Quiz</h1>
      <div className="space-y-4">
        {questions.map((question) => (
          <QuestionItem key={question.id} question={question} />
        ))}
        <Button 
          variant="contained" 
          color="primary" 
          onClick={calculateScore} 
          className="mt-4"
        >
          Submit
        </Button>
      </div>
      <div className="mt-6">
        <h2 className="text-xl">Your Score: {score}</h2>
      </div>
    </div>
  );
};

export default Quiz;
