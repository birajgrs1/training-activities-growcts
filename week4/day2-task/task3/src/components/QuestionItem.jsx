import { useQuiz } from "../context/QuizContext";
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

const QuestionItem = ({ question }) => {
  const { answers, handleAnswer } = useQuiz();

  return (
    <FormControl component="fieldset" className="w-full">
      <FormLabel component="legend" className="font-semibold">
        {question.question}
      </FormLabel>
      <RadioGroup
        name={question.id}
        value={answers[question.id]}
        onChange={(e) => handleAnswer(question.id, e.target.value)}
      >
        {question.options.map((option) => (
          <FormControlLabel
            key={option}
            value={option.charAt(0)}
            control={<Radio color="primary" />}
            label={option}
            className="mt-1"
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default QuestionItem;

