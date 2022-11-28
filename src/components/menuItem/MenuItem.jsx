import React, { useState } from "react";
import "./MenuItem.css";
import CircleIcon from "@mui/icons-material/Circle";
import { green, red } from "@mui/material/colors";
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
  const [showAddons, setShowAddons] = useState(false);
  const dispatch = useDispatch();
  const allOrder = useSelector(selectAllOrder);
  let arr = [];

  const quantityArr = allOrder.filter((odr) => odr.name === name);
  let quantity = 0;
  if (quantityArr) {
    quantityArr.forEach((odr) => {
      quantity += odr.quantity;
    });
  } else {
    quantity = 0;
  }

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
    const orderId = `${id}-${arr.sort().join("-")}`;

    const checkOdr = allOrder.find((odr) => odr.id === orderId);
    if (!arr.length) {
      arr.push("No addons");
    }

    if (!checkOdr) {
      const orderObj = {
        id: orderId,
        name: name,
        price: price,
        quantity: 1,
        calories: calories,
        addons: [...arr],
      };
      dispatch(addOrder(orderObj));
    } else {
      dispatch(incrementQuantity(orderId));
    }
  };

  const handleDecrement = () => {
    const orderId = `${id}-${arr.sort().join("-")}`;
    const checkOdr = allOrder.find((odr) => odr.id === orderId);
    if (!checkOdr) {
      return;
    }
    if (checkOdr.quantity === 1) {
      dispatch(deleteOrder(orderId));
    } else if (checkOdr.quantity > 1) {
      dispatch(decrementQuantity(orderId));
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

        {itemAvailability ? (
          <>
            <div className="menuItem-btns">
              <button
                onClick={handleDecrement}
                style={{ paddingBottom: "4px" }}
                className="menuItem-btns__addRemove"
              >
                -
              </button>
              {quantity}
              <button
                onClick={handleAddOrder}
                className="menuItem-btns__addRemove"
              >
                +
              </button>
            </div>
          </>
        ) : !itemAvailability ? (
          <p style={{ color: "red", marginTop: "5px" }}>out of stock</p>
        ) : null}

        {renderedAddons.length ? (
          <p
            onClick={() => setShowAddons(!showAddons)}
            style={{
              color: "red",
              fontSize: "13px",
              cursor: "pointer",
              margin: "3px 0px",
            }}
          >
            {!showAddons ? "Customizations Available" : "Hide Customizations"}
          </p>
        ) : null}
        {showAddons ? renderedAddons : null}
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
