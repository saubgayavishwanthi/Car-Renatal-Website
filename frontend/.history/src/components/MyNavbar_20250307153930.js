import React from "react";
import "../css/MyNavbar.css"; // Import the CSS file
import logo from "../assets/logo.png"; // Import your logo
import Contact from './Contact';

const MyNavbar = () => {
  return (
    <nav className="navbar">
      {/* Logo on the Left */}
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Links on the Right */}
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
      <div className="phone-number">
        <p>+94704066930</p>
      </div>
    </nav>
  );
};

export default MyNavbar;
