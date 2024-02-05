// Navbar.js
import React from "react";
import Header from "./Header";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-center">
          <Header />

          {/* Dynamic Links */}
          <PageLinks parentClass="nav-link" />

          <SocialLinks />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
