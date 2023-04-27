import { useEffect, useContext } from "react";
import { ResultsContext } from "../context/Results";
import { useNavigate } from "react-router-dom";
import { TEST1_WORDS, TEST2_WORDS, shuffleArray } from "../constants/general";
const Ready = () => {
  const navigate = useNavigate();
  const { currentTest, setSystemInput } = useContext(ResultsContext);

  useEffect(() => {
    setTimeout(() => {
      if (currentTest) {
        setSystemInput(shuffleArray(TEST2_WORDS));
      } else {
        setSystemInput(shuffleArray(TEST1_WORDS));
      }
      navigate("/wordsgrid");
    }, 2500);
  }, []);
  return <h1>Ready</h1>;
};

export default Ready;
