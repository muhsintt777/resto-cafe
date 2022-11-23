import React from "react";
import { useSelector } from "react-redux";
import { getDataStatus } from "../../features/data/dataSlice";
import "./HenHousePage.css";

const HenHousePage = () => {
  const dataStatus = useSelector(getDataStatus);
  return (
    <section>
      {dataStatus === "loading" ? (
        <p>loading</p>
      ) : dataStatus === "succeeded" ? (
        <>
          <h1>hen house</h1>
          <h1>hen house</h1>
          <h1>hen house</h1>
          <h1>hen house</h1>
          <h1>hen house</h1>
          <h1>hen house</h1>
          <h1>hen house</h1>
        </>
      ) : dataStatus === "failed" ? (
        <p>loading failed</p>
      ) : null}
    </section>
  );
};

export default HenHousePage;
