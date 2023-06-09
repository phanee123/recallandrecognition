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
      <h4 className="heading">
        The following is the original list of words which was presented to you during the experiment.
      </h4>
      <h4>Using this as a key, Compare the list with the words that you have written in your note book.</h4>
      <div className="wordWrapper">
        <ol style={{ margin: "16px 0" }}>
          {TEST1_WORDS.map((word) => (
            <li key={word}>{word}</li>
          ))}
        </ol>
        <div className="inputWrapper">
          <h5>No. of correct words recalled need to be presented in the space given below.</h5>
          <label htmlFor="test1UserScore" style={{ textAlign: "center" }}>
            Recall Score
            <input
              type="number"
              value={test1Score}
              id="test1UserScore"
              name="test1UserScore"
              onChange={(e) => setTest1Score(e.target.value)}
            />
          </label>

          <button className="button" onClick={handleEvaluateClick}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Evaluate;
