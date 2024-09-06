import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "./App.css";
import AddTutorial from "./components/AddTutorial";
import TutorialsList from "./components/TutorialsList";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route exact path={"/"} element={<TutorialsList/>} />
    <Route exact path="/tutorials" element={<TutorialsList/>} />
    <Route exact path="/add" element={<AddTutorial/>} />
    </Routes>
    </BrowserRouter>
</>
  );
}

export default App;
