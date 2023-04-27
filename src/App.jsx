import { BrowserRouter, Routes, Route } from "react-router-dom";
import Instructions from "./page/Instructions";
import { ResultsProvider } from "./context/Results";
import ExitWithDownloadExcel from "./page/ExitWithDownloadExcel";
import PageNotFound from "./page/PageNotFound";

import "./App.css";
import Ready from "./page/Ready";
import WordsGrid from "./page/wordsgrid";

function App() {
  return (
    <main className="main-container">
      <BrowserRouter>
        <ResultsProvider>
          <Routes>
            <Route path="/" element={<Instructions />} />
            {/* <Route path="/interventiontask" element={<IntTask />} /> */}
            <Route path="/ready" element={<Ready />} />
            <Route path="/wordsgrid" element={<WordsGrid />} />
            <Route path="/exitWithExcel" element={<ExitWithDownloadExcel />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </ResultsProvider>
      </BrowserRouter>
    </main>
  );
}

export default App;
