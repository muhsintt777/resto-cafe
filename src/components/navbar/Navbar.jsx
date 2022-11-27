import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllData } from "../../features/data/dataSlice";
import "./Navbar.css";

const Navbar = () => {
  const allData = useSelector(selectAllData);
  let routePathArr = [];
  allData.forEach((data) => {
    routePathArr.push(data.menu_category);
  });
  const home = routePathArr.shift();

  const renderedLinkArr = routePathArr.map((path) => {
    return (
      <Link key={nanoid()} to={`/${path.split(" ").join("")}`}>
        <button className="navbar-buttons">{path}</button>
      </Link>
    );
  });
  return (
    <nav>
      <Link to="/">
        <button className="navbar-buttons">{home}</button>
      </Link>
      {renderedLinkArr}
    </nav>
  );
};

export default Navbar;
