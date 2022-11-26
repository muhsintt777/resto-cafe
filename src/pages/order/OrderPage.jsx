import React from "react";
import "./OrderPage.css";
import HomeIcon from "@mui/icons-material/Home";
import { useSelector } from "react-redux";
import { selectAllOrder } from "../../features/order/orderSlice";
import { nanoid } from "@reduxjs/toolkit";
import OrderItem from "../../components/orderItem/OrderItem";
import { Link } from "react-router-dom";

const OrderPage = () => {
  const allOrder = useSelector(selectAllOrder);

  const renderedOrder = allOrder.map((order) => {
    return (
      <OrderItem
        key={nanoid()}
        name={order.name}
        quantity={order.quantity}
        calories={order.calories}
        price={order.price}
        addons={order.addons}
        id={order.id}
      />
    );
  });

  return (
    <section className="orderPage-container">
      <div className="orderPage-header">
        <p>Cart</p>
        <Link to="/">
          <HomeIcon color="secondary" fontSize="large" />
        </Link>
      </div>
      <div className="orderList">{renderedOrder}</div>
    </section>
  );
};

export default OrderPage;
