import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";

import "./cart-dropdown.scss";

const CartDropdown = ({ cartItem }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItem.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT </CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItem } }) => ({
  cartItem
});

export default connect(mapStateToProps)(CartDropdown);
