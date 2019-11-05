import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartRedcer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";

export default combineReducers({
  user: userReducer,
  cart: cartRedcer,
  directory: directoryReducer
});
