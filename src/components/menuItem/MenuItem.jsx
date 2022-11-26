import React from "react";
import "./MenuItem.css";
import CircleIcon from "@mui/icons-material/Circle";
import { green, red } from "@mui/material/colors";
import { Fab } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {
  addOrder,
  decrementQuantity,
  deleteOrder,
  incrementQuantity,
  selectAllOrder,
} from "../../features/order/orderSlice";

const MenuItem = ({
  id,
  name,
  calories,
  description,
  image,
  currency,
  itemAvailability,
  price,
  type,
  addon1Items,
  addon2Items,
}) => {
  const dispatch = useDispatch();
  const allOrder = useSelector(selectAllOrder);
  let arr = [];

  const handleFormChange = (e) => {
    const check = arr.find((add) => add === e.target.value);
    if (!check) {
      arr.push(e.target.value);
    } else if (check) {
      const newArr = arr.filter((add) => add !== e.target.value);
      arr = newArr;
    }
  };

  const handleAddOrder = () => {
    const checkOdr = allOrder.find((odr) => odr.id === id);
    if (!arr.length) {
      arr.push("No addons");
    }

    if (!checkOdr) {
      const orderObj = {
        id: id,
        name: name,
        price: price,
        quantity: 1,
        calories: calories,
        addons: [...arr],
      };
      dispatch(addOrder(orderObj));
    } else {
      dispatch(incrementQuantity(id));
    }
  };

  const handleDecrement = () => {
    const checkOdr = allOrder.find((odr) => odr.id === id);
    if (!checkOdr) {
      return;
    }
    if (checkOdr.quantity === 1) {
      dispatch(deleteOrder(id));
    } else if (checkOdr.quantity > 1) {
      dispatch(decrementQuantity(id));
    }
  };

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

  let renderedAddons = [];
  if (addon1Items || addon2Items) {
    const allAddons = addon1Items.concat(addon2Items);
    renderedAddons = allAddons.map((addon) => {
      return (
        <div key={nanoid()}>
          <form
            onChange={handleFormChange}
            className="menuItem-addons"
            action=""
          >
            <label htmlFor="">{addon}</label>
            <input
              aria-label={addon}
              type="checkbox"
              name=""
              id=""
              value={addon}
            />
          </form>
        </div>
      );
    });
  }

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
          <Fab
            onClick={handleDecrement}
            size="small"
            sx={{ color: red[500] }}
            aria-label="remove"
          >
            <Remove />
          </Fab>
          <p>0</p>
          <Fab
            onClick={handleAddOrder}
            size="small"
            sx={{ color: green[500] }}
            aria-label="add"
          >
            <Add />
          </Fab>
        </div>
        {itemAvailability ? (
          <p>available</p>
        ) : !itemAvailability ? (
          <p>out of stock</p>
        ) : null}

        {renderedAddons}
      </div>
      <div className="menuItem-calories">
        <p>{calories} calories</p>
      </div>
      <div className="menuItem-image">
        <img className="menuItem-img__pic" src={image} alt="new" />
      </div>
    </article>
  );
};

export default MenuItem;
