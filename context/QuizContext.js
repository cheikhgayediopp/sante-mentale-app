// context/QuizContext.js
import React, { createContext, useState } from "react";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [history, setHistory] = useState([]); // tableau de scores

  const addResult = (score, level) => {
    const date = new Date().toLocaleDateString();
    setHistory([...history, { date, score, level }]);
  };

  return (
    <QuizContext.Provider value={{ history, addResult }}>
      {children}
    </QuizContext.Provider>
  );
};
