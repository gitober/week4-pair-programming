// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Tours from "./components/Tours";
import NotFound from "./components/NotFound";
import Registration from "./components/Registration"; // Import the Registration component
import "./app.css";
import "./components/Registration.css"; // Import the Registration component's CSS

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="tours" element={<Tours />} />
          <Route path="registration" element={<Registration />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
