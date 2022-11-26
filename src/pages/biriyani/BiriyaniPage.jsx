import React from "react";
import { useSelector } from "react-redux";
import MenuItem from "../../components/menuItem/MenuItem";
import { getDataStatus, selectAllData } from "../../features/data/dataSlice";
import { nanoid } from "@reduxjs/toolkit";

const Biriyani = () => {
  const dataStatus = useSelector(getDataStatus);
  const allData = useSelector(selectAllData);

  let renderedItems;
  if (dataStatus === "loading") {
    renderedItems = (
      <div className="loadingPara">
        <p>loading</p>
      </div>
    );
  } else if (dataStatus === "succeeded") {
    const menuItemArray = allData[4].category_dishes;
    renderedItems = menuItemArray.map((item) => {
      const addonCatLength = item.addonCat.length;
      let addon1Items = [];
      let addon2Items = [];

      if (addonCatLength === 2) {
        const addonArr1 = item.addonCat[0].addons;
        const addonArr2 = item.addonCat[1].addons;
        addon1Items = addonArr1.map((addon) => addon.dish_name);
        addon2Items = addonArr2.map((addon) => addon.dish_name);
      }

      const id = nanoid();

      return (
        <MenuItem
          key={id}
          id={id}
          name={item.dish_name}
          calories={item.dish_calories}
          description={item.dish_description}
          image={item.dish_image}
          currency={item.dish_currency}
          itemAvailability={item.dish_Availability}
          price={item.dish_price}
          type={item.dish_Type}
          addon1Items={addon1Items}
          addon2Items={addon2Items}
        />
      );
    });
  } else if (dataStatus === "failed") {
    renderedItems = renderedItems = (
      <div className="failedPara">
        <p>loading failed</p>
      </div>
    );
  } else {
    renderedItems = null;
  }

  return <section>{renderedItems}</section>;
};

export default Biriyani;
