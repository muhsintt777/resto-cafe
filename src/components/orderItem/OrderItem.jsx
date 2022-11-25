import React from "react";
import "./OrderItem.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteOrder } from "../../features/order/orderSlice";

const OrderItem = ({ name, quantity, calories, price, addons, id }) => {
  const dispatch = useDispatch();

  const totalPrice = quantity * price;
  const totalCalories = quantity * calories;
  const stringAddons = addons.join();

  return (
    <article className="orderItem-container">
      <div className="orderItem-quantity">{quantity} x</div>
      <div className="orderItem-description">
        <p>
          <span className="orderItem-description__span">Item:</span> {name}
        </p>
        <p>
          <span className="orderItem-description__span">Addons: </span>
          {stringAddons}
        </p>
        <p>
          <span className="orderItem-description__span">Calories:</span>{" "}
          {totalCalories}
        </p>
        <p>
          <span className="orderItem-description__span">Price:</span>{" "}
          {totalPrice}
        </p>
      </div>
      <div className="orderItem-delete">
        <IconButton
          onClick={() => dispatch(deleteOrder(id))}
          aria-label="delete"
        >
          <DeleteIcon sx={{ color: red[500] }} />
        </IconButton>
      </div>
    </article>
  );
};

export default OrderItem;
