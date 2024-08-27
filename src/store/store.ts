import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import user from "./slices/userSlice";
import modalContainer from "./slices/modalContainerSlice";
import products from "./slices/productsSlice";
import termsToSearch from "./slices/termsToSearchSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    user,
    modalContainer,
    products,
    termsToSearch
  },
});
