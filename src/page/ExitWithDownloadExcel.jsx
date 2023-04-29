import { CSVLink } from "react-csv";
import { useContext, useState } from "react";
import { ResultsContext } from "../context/Results";
import { TEST1_WORDS } from "../constants/general";

const headers = [
  { label: "Test1 Words", key: "test1Words" },
  { label: "Test2 Words", key: "test2Words" },
  { label: "User Clicked Words", key: "userInput" },
];

const ExitWithDownloadExcel = () => {
  const { systemInput, userInput, test1Score } = useContext(ResultsContext);

  const getTest2Score = () => {
    const trueNum = TEST1_WORDS.filter((word) => userInput.includes(word)).length;
    return (TEST1_WORDS.length - trueNum) * (systemInput.length * 0.01);
  };

  const csvReport = {
    data: [{ test1Words: TEST1_WORDS, test2Words: systemInput, userInput }],
    headers: headers,
    filename: `Recall&Recognistion${new Date().toLocaleString()}`,
    extension: ".csv",
  };
  return (
    <div>
      <h2>Results:</h2>
      <h3>Score Test 1 :{test1Score * 0.15}</h3>
      <h3>Score Test 2 :{getTest2Score()}</h3>
      <h3>Please click the below link to download the results</h3>
      <CSVLink {...csvReport}>Download me</CSVLink>;
    </div>
  );
};

export default ExitWithDownloadExcel;
