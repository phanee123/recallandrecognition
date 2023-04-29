import { useContext } from "react";
import { ResultsContext } from "./../context/Results";
import { useNavigate } from "react-router-dom";
import { TEST1_WORDS } from "../constants/general";
import "../App.css";

const Evaluate = () => {
  const { test1Score, setTest1Score } = useContext(ResultsContext);
  const navigate = useNavigate();
  const handleEvaluateClick = () => {
    navigate("/exitWithExcel");
  };
  return (
    <div className="evaluateWrapper">
      <ul>
        {TEST1_WORDS.map((word) => (
          <li key={word}>{word}</li>
        ))}
      </ul>
      <div className="inputWrapper">
        <label htmlFor="test1UserScore">
          Recall Score{" "}
          <input
            type="number"
            value={test1Score}
            id="test1UserScore"
            name="test1UserScore"
            onChange={(e) => setTest1Score(e.target.value)}
          />
        </label>

        <button className="button" onClick={handleEvaluateClick}>
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Evaluate;
