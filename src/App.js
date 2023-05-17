import React from "react";
import "./index.css";

import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Project from "./routes/Project";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/project" element={<Project />}></Route>

        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
