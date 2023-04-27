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
  const [currentTest, setCurrentTest] = useState(1);

  const value = {
    systemInput,
    setSystemInput,
    userInput,
    setUserInput,
    currentTest,
    setCurrentTest,
  };
  return (
    <ResultsContext.Provider value={value}>{children}</ResultsContext.Provider>
  );
};
