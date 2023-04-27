import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ResultsContext } from "../../context/Results";
import { NUMBER_OF_SECONDS, getRandomInt } from "../../constants/general";
import styles from "./styles.module.css";

const num1 = getRandomInt(0, 99);
const num2 = getRandomInt(0, 99);
const Intervention = () => {
  const navigate = useNavigate();
  const { setCurrentTest } = useContext(ResultsContext);
  const [sum, setSum] = useState("");
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, NUMBER_OF_SECONDS * 1000);
    setCurrentTest(1);
  }, []);
  return (
    <div className={styles.container}>
      <h1>Find the sum of below numbers</h1>
      <h2 className={styles.sum}>
        {`${num1} + ${num2}`} =
        <input value={sum} onChange={(e) => setSum(e.target.value)} className={styles.inputStyles} />
      </h2>
    </div>
  );
};

export default Intervention;
