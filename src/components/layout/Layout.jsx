import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="layout-container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
