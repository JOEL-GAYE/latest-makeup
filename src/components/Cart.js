import React from "react";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="cart-icon"
      >
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.6 13.6a1 1 0 0 0 1 .8H19a1 1 0 0 0 .96-.73L23 6H6"></path>
      </svg>
    </div>
  );
};

export default Cart;
