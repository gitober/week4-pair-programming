import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Tours from "./Tours";
import Services from "./Services";
import About from "./About";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </div>
  );
};

export default Home;
