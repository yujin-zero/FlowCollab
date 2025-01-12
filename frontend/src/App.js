import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NewProjectPage from "./pages/NewProjectPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/new-project" element={<NewProjectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
