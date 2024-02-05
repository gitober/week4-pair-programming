// Home.js
import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Tours from "./Tours";
import Services from "./Services";
import About from "./About";
import Registration from "./Registration";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About /> 
      <Services />
      <Tours />
      <Registration />  
      <Footer />
    </div>
  );
};

export default Home;
