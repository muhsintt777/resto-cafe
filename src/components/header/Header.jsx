import "./Header.css";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllOrder } from "../../features/order/orderSlice";

const Header = () => {
  const allOrder = useSelector(selectAllOrder);
  const cartQty = allOrder.length;
  return (
    <header>
      <div className="header-name">
        <h1>UNI Resto cafe</h1>
      </div>
      <Link to="/order">
        <div className="header-myOrders">
          <p>My Orders</p>
          <Badge badgeContent={cartQty} color="secondary">
            <ShoppingCartIcon color="secondary" />
          </Badge>
        </div>
      </Link>
    </header>
  );
};

export default Header;
