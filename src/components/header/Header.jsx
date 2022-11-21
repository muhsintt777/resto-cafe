import "./Header.css";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

const Header = () => {
  return (
    <header>
      <div className="header-name">
        <h1>UNI Resto cafe</h1>
      </div>
      <div className="header-myOrders">
        <p>My Orders</p>
        <Badge badgeContent={4} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </div>
    </header>
  );
};

export default Header;
