import styles from "./styles.module.css";
import Parser from "html-react-parser";
import { useEffect, useState } from "react";

const Instruction = (props) => {
  const {
    children,
    label1,
    label2,
    voiceInstruction,
    handleBackClick,
    handleNextClick,
    handleAudio,
  } = props;

  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    handleAudio();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={styles.card}>
      {Parser(children)}
      <div className={styles.buttonContainer}>
        {voiceInstruction && (
          <button onClick={handleClick} className={styles.buttonAudio}>
            {isPlaying ? "Pause" : "Play"}
          </button>
        )}
        {label1 && (
          <button onClick={props.handleBackClick} className={styles.buttonBack}>
            {label1}
          </button>
        )}
        {label2 && (
          <button onClick={props.handleNextClick} className={styles.button}>
            {label2}
          </button>
        )}
      </div>
    </div>
  );
};

export default Instruction;
