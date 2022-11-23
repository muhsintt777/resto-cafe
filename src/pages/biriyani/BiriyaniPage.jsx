import React from "react";
import { useSelector } from "react-redux";
import { getDataStatus } from "../../features/data/dataSlice";

const Biriyani = () => {
  const dataStatus = useSelector(getDataStatus);
  return (
    <section>
      {dataStatus === "loading" ? (
        <p>loading</p>
      ) : dataStatus === "succeeded" ? (
        <>
          <h2>biriyani</h2>
          <h2>biriyani</h2>
          <h2>biriyani</h2>
          <h2>biriyani</h2>
          <h2>biriyani</h2>
        </>
      ) : dataStatus === "failed" ? (
        <p>data loading failed</p>
      ) : null}
    </section>
  );
};

export default Biriyani;
