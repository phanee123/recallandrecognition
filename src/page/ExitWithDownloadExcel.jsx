import { CSVDownload, CSVLink } from "react-csv";
import { useContext } from "react";
import { ResultsContext } from "../context/Results";

//   TODO: fix headers
const headers = [
  { label: "Test Number", key: "currentTest" },
  { label: "SL Number in Current Test", key: "serialNum" },
  { label: "System Input", key: "systemInput" },
  { label: "User Input", key: "userInput" },
  { label: "Input Status", key: "isTrue" },
  { label: "Time Response (in se)", key: "timeTookInSec" },
];

const ExitWithDownloadExcel = () => {
  const { results } = useContext(ResultsContext);

  const csvReport = {
    data: results,
    headers: headers,
    filename: `StroopEffect_${new Date().toLocaleString()}`,
    extension: ".csv",
  };

  //   TODO: Add correct message below
  return (
    <div>
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, iure.
      </h3>
      <CSVLink {...csvReport}>Download me</CSVLink>;
    </div>
  );
};

export default ExitWithDownloadExcel;
