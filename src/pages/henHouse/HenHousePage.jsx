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
      ) : (
        <>
          <h1>hen house</h1>
          <h1>hen house</h1>
          <h1>hen house</h1>
          <h1>hen house</h1>
          <h1>hen house</h1>
          <h1>hen house</h1>
          <h1>hen house</h1>
        </>
      )}
    </section>
  );
};

export default HenHousePage;
