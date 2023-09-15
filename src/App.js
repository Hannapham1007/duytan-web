import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Lunch from "./Components/Lunch";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Meny from "./Components/Meny";

function App() {
  return (
    <div className="app">
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/meny" element={<Meny />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> 

     

      <Footer />
    </div>
  );
}

export default App;
