import React from "react";
import { useSelector } from "react-redux";
import MenuItem from "../../components/menuItem/MenuItem";
import { getDataStatus, selectAllData } from "../../features/data/dataSlice";
import "./FromSeaPage.css";
import { nanoid } from "@reduxjs/toolkit";

const FromSeaPage = () => {
  const dataStatus = useSelector(getDataStatus);
  const allData = useSelector(selectAllData);

  let renderedItems;
  if (dataStatus === "loading") {
    renderedItems = <p>loading</p>;
  } else if (dataStatus === "succeeded") {
    const menuItemArray = allData[3].category_dishes;
    renderedItems = menuItemArray.map((item) => (
      <MenuItem
        key={nanoid()}
        name={item.dish_name}
        calories={item.dish_calories}
        description={item.dish_description}
        image={item.dish_image}
        currency={item.dish_currency}
        itemAvailability={item.dish_Availability}
        price={item.dish_price}
        type={item.dish_Type}
      />
    ));
  } else if (dataStatus === "failed") {
    renderedItems = <p>loading failed</p>;
  } else {
    renderedItems = null;
  }

  return <section>{renderedItems}</section>;
};

export default FromSeaPage;
