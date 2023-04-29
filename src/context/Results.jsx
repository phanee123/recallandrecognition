import { createContext, useState } from "react";

export const ResultsContext = createContext({
  systemInput: [],
  setSystemInput: () => {},
  userInput: [],
  setUserInput: () => {},
  currentTest: 0,
  setCurrentTest: () => {},
});

export const ResultsProvider = ({ children }) => {
  const [systemInput, setSystemInput] = useState([]);
  const [userInput, setUserInput] = useState([]);
  const [currentTest, setCurrentTest] = useState(0);
  const [test1Score, setTest1Score] = useState("");

  const value = {
    systemInput,
    setSystemInput,
    userInput,
    setUserInput,
    currentTest,
    setCurrentTest,
    test1Score,
    setTest1Score,
  };
  return <ResultsContext.Provider value={value}>{children}</ResultsContext.Provider>;
};
