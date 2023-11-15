import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import About from "../../pages/About/About";
import "./App.css";
import Layout from "../Layout/Layout";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
