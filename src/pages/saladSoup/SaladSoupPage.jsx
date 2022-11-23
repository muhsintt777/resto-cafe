import React from "react";
import { useSelector } from "react-redux";
import { getDataStatus } from "../../features/data/dataSlice";
import "./SaladSoupPage.css";

const SaladSoupPage = () => {
  const dataStatus = useSelector(getDataStatus);
  return (
    <section>
      {dataStatus === "loading" ? (
        <p>loading</p>
      ) : (
        <>
          <h1>salad and soup</h1>
          <h1>salad and soup</h1>
          <h1>salad and soup</h1>
          <h1>salad and soup</h1>
          <h1>salad and soup</h1>
          <h1>salad and soup</h1>
          <h1>salad and soup</h1>
          <h1>salad and soup</h1>
          <h1>salad and soup</h1>
        </>
      )}
    </section>
  );
};

export default SaladSoupPage;
