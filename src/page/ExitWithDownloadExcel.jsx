import { CSVLink } from "react-csv";
import { useContext, useState } from "react";
import { ResultsContext } from "../context/Results";
import { TEST1_WORDS } from "../constants/general";
import { useNavigate } from "react-router-dom";

/*Adding CSS for button*/

const styles = {
  wrapper: {
    width: "50vw",
    height: "70vh",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "32px",
  },

  button: {
    display: "block",
    outline: "0",
    border: "0",
    padding: "8px 32px",
    backgroundColor: "#6666ff",
    color: "white",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "20px",
    fontWeight: "600",
  },
};

const headers = [
  { label: "Test1 Words", key: "test1Words" },
  { label: "Test2 Words", key: "test2Words" },
  { label: "User Clicked Words", key: "userInput" },
];

const ExitWithDownloadExcel = () => {
  const { systemInput, userInput, test1Score } = useContext(ResultsContext);
  const navigate = useNavigate();

  const getTest2Score = () => {
    const trueNum = TEST1_WORDS.filter((word) => userInput.includes(word));
    return trueNum.length;
  };

  const getMergedWords = () => {
    return systemInput.map((word, index) => ({
      test1Words: TEST1_WORDS[index] ? TEST1_WORDS[index] : "",
      test2Words: word,
      userInput: userInput[index] ? userInput[index] : "",
    }));
  };

  console.log(getMergedWords());

  const csvReport = {
    data: getMergedWords(),
    headers: headers,
    filename: `Recall&Recognition${new Date().toLocaleString()}`,
    extension: ".csv",
  };
  return (
    <div style={styles.wrapper}>
      <h2>Results:</h2>
      <h3>No. of words recalled :{test1Score}</h3>
      <h3>No. of words recognized :{getTest2Score()}</h3>
      <h3>
        Please click the below link to download the key and your responses for
        recognition
      </h3>
      <CSVLink {...csvReport}>Download me</CSVLink>
      <button style={styles.button} onClick={() => navigate("/lastactivity")}>
        Next
      </button>
    </div>
  );
};

export default ExitWithDownloadExcel;
