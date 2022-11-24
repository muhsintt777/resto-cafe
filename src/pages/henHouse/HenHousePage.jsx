import React from "react";
import { useSelector } from "react-redux";
import MenuItem from "../../components/menuItem/MenuItem";
import { getDataStatus, selectAllData } from "../../features/data/dataSlice";
import "./HenHousePage.css";

const HenHousePage = () => {
  const dataStatus = useSelector(getDataStatus);
  const allData = useSelector(selectAllData);
  const menuItemArray = allData[1].category_dishes;
  const renderedItems = menuItemArray.map((item) => {
    return (
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
    );
  });

  return (
    <section>
      {dataStatus === "loading" ? (
        <p>loading</p>
      ) : dataStatus === "succeeded" ? (
        <>{renderedItems}</>
      ) : dataStatus === "failed" ? (
        <p>loading failed</p>
      ) : null}
    </section>
  );
};

export default HenHousePage;
