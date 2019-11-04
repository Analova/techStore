import React from "react";
import { connect } from "react-redux";

import { selectCartItems } from "../../redux/cart/cart.selectors";

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

const mapStateToProps = state => ({
  cartItem: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
