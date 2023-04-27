import { useContext, useEffect, useState } from "react";
import { ResultsContext } from "../../context/Results";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { NUMBER_OF_SECONDS } from "../../constants/general";
const WordsGrid = () => {
  const { systemInput, currentTest, setUserInput } = useContext(ResultsContext);
  const [userClicked, setUserClicked] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      if (currentTest) {
      } else {
        navigate("/intervention");
      }
    }, NUMBER_OF_SECONDS * 1000);
  }, []);

  const handleWordClick = (event) => {
    const temp = [...userClicked];
    const value = event.target.innerHTML;
    temp.push(value);
    setUserClicked(temp);
  };

  const handleSubmit = () => {
    setUserInput(userClicked);
    navigate("/exitWithExcel");
  };

  if (currentTest) {
    return (
      <div className={styles.container}>
        <div className={styles.wordWrapper}>
          {systemInput.map((word, index) => (
            <h3 className={styles.wordStylesClickable} onClick={handleWordClick}>
              {word}
            </h3>
          ))}
        </div>
        <button onClick={handleSubmit} className={styles.submitButton}>
          SUBMIT
        </button>
      </div>
    );
  }
  return (
    <div className={styles.wordWrapper}>
      {systemInput.map((word, index) => (
        <h3 className={styles.wordStyles}>{word}</h3>
      ))}
    </div>
  );
};

export default WordsGrid;
