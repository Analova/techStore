export const addItemToCart = (cartItemss, cartItemsToAdd) => {
  const existingCartItem = cartItemss.find(
    cartItems => cartItems.id === cartItemsToAdd.id
  );

  if (existingCartItem) {
    return cartItemss.map(cartItems =>
      cartItems.id === cartItemsToAdd.id
        ? { ...cartItems, quantity: cartItems.quantity + 1 }
        : cartItems
    );
  }

  return [...cartItemss, { ...cartItemsToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItemss, cartItemsToRemove) => {
  const existingCartItem = cartItemss.find(
    cartItems => cartItems.id === cartItemsToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItemss.filter(
      cartItems => cartItems.id !== cartItemsToRemove.id
    );
  }

  return cartItemss.map(cartItems =>
    cartItems.id === cartItemsToRemove.id
      ? { ...cartItems, quantity: cartItems.quantity - 1 }
      : cartItems
  );
};
