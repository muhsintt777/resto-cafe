import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <button className="navbar-buttons">Salads and Soups</button>
      </Link>
      <Link to="/barnyard">
        <button className="navbar-buttons">From the Barnyard</button>
      </Link>
      <Link to="/henHouse">
        <button className="navbar-buttons">From the Hen House</button>
      </Link>
      <Link to="/fromSea">
        <button className="navbar-buttons">Fresh From The Sea</button>
      </Link>
    </nav>
  );
};

export default Navbar;
