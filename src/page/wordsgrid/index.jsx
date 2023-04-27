import { useContext, useEffect } from "react";
import { ResultsContext } from "../../context/Results";
import styles from "./styles.module.css";
const WordsGrid = () => {
  const { systemInput } = useContext(ResultsContext);
  useEffect(() => {}, []);
  return (
    <div className={styles.wordWrapper}>
      {systemInput.map((word, index) => (
        <h3 className={styles.wordStyles}>{word}</h3>
      ))}
    </div>
  );
};

export default WordsGrid;
