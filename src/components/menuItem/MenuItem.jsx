import React from "react";
import "./MenuItem.css";
import CircleIcon from "@mui/icons-material/Circle";
import { green, red } from "@mui/material/colors";
import { Fab } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

const MenuItem = ({
  name,
  calories,
  description,
  image,
  currency,
  itemAvailability,
  price,
  type,
}) => {
  const sxValue =
    type === 1
      ? { color: red[500] }
      : type === 2
      ? { color: green[500] }
      : null;
  const vegNonVegClass =
    type === 1
      ? "menuItem-article__nonVeg__border"
      : type === 2
      ? "menuItem-article__veg__border"
      : null;
  return (
    <article className="menuItem-article">
      <div className="menuItem-article__vegNonVeg">
        <div className={vegNonVegClass}>
          <CircleIcon fontSize="small" sx={sxValue} />
        </div>
      </div>
      <div className="menuItem-details">
        <p className="menuItem-details__name">{name}</p>
        <p className="menuItem-details__sarValue">
          {currency} {price}
        </p>
        <p className="menuItem-details__description">{description}</p>
        <div className="menuItem-buttons">
          <Fab size="small" sx={{ color: red[500] }} aria-label="remove">
            <Remove />
          </Fab>
          <p>0</p>
          <Fab size="small" sx={{ color: green[500] }} aria-label="add">
            <Add />
          </Fab>
        </div>
        {itemAvailability ? (
          <p>available</p>
        ) : !itemAvailability ? (
          <p>out of stock</p>
        ) : null}
      </div>
      <div className="menuItem-calories">
        <p>{calories} calories</p>
      </div>
      <div className="menuItem-img">
        <img src={image} alt="new" />
      </div>
    </article>
  );
};

export default MenuItem;
