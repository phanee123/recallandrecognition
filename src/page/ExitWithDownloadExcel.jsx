import { CSVLink } from "react-csv";
import { useContext } from "react";
import { ResultsContext } from "../context/Results";
import { TEST1_WORDS } from "../constants/general";

const headers = [
  { label: "Result Words", key: "actualWords" },
  { label: "Test Words", key: "systemInput" },
  { label: "User Input", key: "userInput" },
  // { label: "Recognition", key: "test" },
];

const ExitWithDownloadExcel = () => {
  const { systemInput, userInput } = useContext(ResultsContext);

  const csvReport = {
    data: [{ actualWords: TEST1_WORDS, systemInput, userInput, isTrue: getResult() }],
    headers: headers,
    filename: `Recall&Recognistion${new Date().toLocaleString()}`,
    extension: ".csv",
  };
  const getResult = () => {};
  return (
    <div>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, iure.</h3>
      <CSVLink {...csvReport}>Download me</CSVLink>;
    </div>
  );
};

export default ExitWithDownloadExcel;
