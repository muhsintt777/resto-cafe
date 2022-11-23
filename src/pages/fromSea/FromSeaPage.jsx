import React from "react";
import { useSelector } from "react-redux";
import { getDataStatus } from "../../features/data/dataSlice";
import "./FromSeaPage.css";

const FromSeaPage = () => {
  const dataStatus = useSelector(getDataStatus);
  return (
    <section>
      {dataStatus === "loading" ? (
        <p>loading</p>
      ) : dataStatus === "succeeded" ? (
        <>
          <h1>sea</h1>
          <h1>sea</h1>
          <h1>sea</h1>
          <h1>sea</h1>
          <h1>sea</h1>
          <h1>sea</h1>
        </>
      ) : dataStatus === "failed" ? (
        <p>loading failed</p>
      ) : null}
    </section>
  );
};

export default FromSeaPage;
