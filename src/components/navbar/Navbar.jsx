import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <button className="navbar-buttons">Salads and Soups</button>
      <button className="navbar-buttons">From the Barnyard</button>
      <button className="navbar-buttons">From the Hen House</button>
      <button className="navbar-buttons">Fresh From The Sea</button>
    </nav>
  );
};

export default Navbar;
