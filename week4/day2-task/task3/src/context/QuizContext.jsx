import { createContext, useContext, useState, useCallback } from "react";

const QuizContext = createContext();

export const useQuiz = () => useContext(QuizContext);

export const QuizProvider = ({ children }) => {
  const [questions] = useState([
    { 
      id: 'q1', 
      question: 'What is 2 + 2?', 
      options: ['A) 3', 'B) 4', 'C) 5'], 
      correctAnswer: 'B' 
    },
    { 
      id: 'q2', 
      question: 'What is the capital of France?', 
      options: ['A) Berlin', 'B) Paris', 'C) Madrid'], 
      correctAnswer: 'B' 
    },
    { 
      id: 'q3', 
      question: 'What is the color of the sky?', 
      options: ['A) Green', 'B) Red', 'C) Blue'], 
      correctAnswer: 'C' 
    },
  ]);

  const initialAnswers = questions.reduce((acc, curr) => 
    ({ ...acc, [curr.id]: '' }), {});

  const [answers, setAnswers] = useState(initialAnswers);
  const [score, setScore] = useState(0);

  const handleAnswer = useCallback((questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  }, []);

  const calculateScore = useCallback(() => {
    const newScore = questions.reduce((acc, curr) => 
      acc + (answers[curr.id] === curr.correctAnswer ? 1 : 0), 0);
    setScore(newScore);
  }, [answers, questions]);

  return (
    <QuizContext.Provider
      value={{
        questions,
        answers,
        score,
        handleAnswer,
        calculateScore
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};


