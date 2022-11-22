import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <button className="navbar-buttons">Soup and Salad</button>
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
      <Link to="/biriyani">
        <button className="navbar-buttons">Biriyani</button>
      </Link>
      <Link to="/fastFood">
        <button className="navbar-buttons">Fast Food</button>
      </Link>
    </nav>
  );
};

export default Navbar;
