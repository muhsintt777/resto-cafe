import React from "react";
import { useSelector } from "react-redux";
import { getDataStatus } from "../../features/data/dataSlice";
import "./BarnyardPage.css";

const BarnyardPage = () => {
  const dataStatus = useSelector(getDataStatus);
  return (
    <section>
      {dataStatus === "loading" ? (
        <p>loading</p>
      ) : (
        <>
          <h1>barnyade</h1>
          <h1>barnyade</h1>
          <h1>barnyade</h1>
          <h1>barnyade</h1>
          <h1>barnyade</h1>
        </>
      )}
    </section>
  );
};

export default BarnyardPage;
