import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import userToken from "./slices/userTokenSlice";
import loading from "./slices/loadingSlice";
import modalContainer from "./slices/modalContainerSlice";
import alert from "./slices/alertSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    userToken,
    loading,
    modalContainer,
    alert,
  },
});
