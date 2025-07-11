import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import WorkExperience from "./pages/WorkExperience";
import TechnicalSkills from "./pages/TechnicalSkills";
import Positions from "./pages/Positions";
import Certifications from "./pages/Certifications";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App bg-gray-900 min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/technical-skills" element={<TechnicalSkills />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;