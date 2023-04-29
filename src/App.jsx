import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ResultsProvider } from "./context/Results";

import Instructions from "./page/Instructions";
import ExitWithDownloadExcel from "./page/ExitWithDownloadExcel";
import PageNotFound from "./page/PageNotFound";
import Ready from "./page/Ready";
import WordsGrid from "./page/wordsgrid";
import Intervention from "./page/intervention";
import Evaluate from "./page/Evaluate";

import "./App.css";

function App() {
  return (
    <main className="main-container">
      <BrowserRouter>
        <ResultsProvider>
          <Routes>
            <Route path="/" element={<Instructions />} />
            <Route path="/intervention" element={<Intervention />} />
            <Route path="/ready" element={<Ready />} />
            <Route path="/wordsgrid" element={<WordsGrid />} />
            <Route path="/evaluate" element={<Evaluate />} />
            <Route path="/exitWithExcel" element={<ExitWithDownloadExcel />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </ResultsProvider>
      </BrowserRouter>
    </main>
  );
}

export default App;
