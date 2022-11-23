import React from "react";
import { useSelector } from "react-redux";
import { getDataStatus } from "../../features/data/dataSlice";

const Biriyani = () => {
  const dataStatus = useSelector(getDataStatus);
  return (
    <section>
      {dataStatus === "loading" ? (
        <p>loading</p>
      ) : (
        <>
          <h2>biriyani</h2>
          <h2>biriyani</h2>
          <h2>biriyani</h2>
          <h2>biriyani</h2>
          <h2>biriyani</h2>
        </>
      )}
    </section>
  );
};

export default Biriyani;
