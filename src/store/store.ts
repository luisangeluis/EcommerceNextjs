import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import user from "./slices/userSlice";
import modalContainer from "./slices/modalContainerSlice";
import products from "./slices/productsSlice";
import termsToSearch from "./slices/termsToSearchSlice";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user,
    modalContainer,
    products,
    termsToSearch,
  },
});

export default store;
