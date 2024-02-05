import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-center">
          <Header />
          <PageLinks parentClass="nav-link" />

          {/* New Link for Registration */}
          <Link to="/registration" className="nav-link">
            Register
          </Link>

          <SocialLinks />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
