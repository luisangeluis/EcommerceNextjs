import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import user from "./slices/userSlice";
import modalContainer from "./slices/modalContainerSlice";
import alert from "./slices/alertSlice";
import loadingErrorMessage from "./slices/loadingErrorMessageSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    user,
    modalContainer,
    alert,
    loadingErrorMessage,
  },
});
