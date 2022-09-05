import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./ReactMenu/Home";
import { Route, Routes } from "react-router-dom";
import Service from "./ReactMenu/Service";
import Contact from "./ReactMenu/Contact";
import About from "./ReactMenu/About";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
