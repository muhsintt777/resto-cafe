import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { selectAllData } from "../../features/data/dataSlice";
import "./Navbar.css";

const Navbar = () => {
  const allData = useSelector(selectAllData);
  let location = useLocation();
  let routePathArr = [];
  allData.forEach((data) => {
    routePathArr.push(data.menu_category);
  });
  const home = routePathArr.shift();

  const renderedLinkArr = routePathArr.map((path) => {
    return (
      <Link key={nanoid()} to={`/${path.split(" ").join("")}`}>
        <button
          style={
            location.pathname === `/${path.split(" ").join("")}`
              ? { color: "red" }
              : null
          }
          className="navbar-buttons"
        >
          {path}
        </button>
      </Link>
    );
  });
  return (
    <nav>
      <Link to="/">
        <button
          style={location.pathname === "/" ? { color: "red" } : null}
          className="navbar-buttons"
        >
          {home}
        </button>
      </Link>
      {renderedLinkArr}
    </nav>
  );
};

export default Navbar;
