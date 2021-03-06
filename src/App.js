import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import {
  Project1,
  Project2,
  Project3,
  Project4,
  Project5,
} from "./pages/Projects";

console.log(
  "Hello inspecteur ... Bienvenue sur mon site (: | :) Hello inspector ... Welcome to my web site"
);
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/project-1" element={<Project1 />} />
        <Route path="/project-2" element={<Project2 />} />
        <Route path="/project-3" element={<Project3 />} />
        <Route path="/project-4" element={<Project4 />} />
        <Route path="/project-5" element={<Project5 />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
