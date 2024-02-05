// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Tours from "./components/Tours";
import NotFound from "./components/NotFound";
import Hero from "./components/Hero";
// import Navigation from "./components/Navigation";
import "./app.css";
import Registration from "./components/Registration";

function App() {
  return (
    <BrowserRouter>
      {/* <Navigation /> */}
      <Routes>
        {/* Added other routes if you want*/}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/contact" element={<About />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<NotFound />} />{" "}
        {/* Added this line for 404 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
