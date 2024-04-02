import { BrowserRouter, Route, Routes } from "react-router-dom";

import { DarkModeProvider } from "./context/DarkModeContext";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import datajson from "./assets/data.json";
import DetailsPage from "./pages/DetailsPage";

function App() {
  const data = JSON.parse(localStorage.getItem("jobData"));
  if (!data) {
    localStorage.setItem("jobData", JSON.stringify(datajson));
  }

  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/job/:jobId" element={<DetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
