import React from "react";
import { useSelector } from "react-redux";
import { getDataStatus } from "../../features/data/dataSlice";

const FastFood = () => {
  const dataStatus = useSelector(getDataStatus);
  return (
    <section>
      {dataStatus === "loading" ? (
        <p>loading</p>
      ) : (
        <>
          <h2>fast foood</h2>
          <h2>fast foood</h2>
          <h2>fast foood</h2>
          <h2>fast foood</h2>
          <h2>fast foood</h2>
          <h2>fast foood</h2>
        </>
      )}
    </section>
  );
};

export default FastFood;
