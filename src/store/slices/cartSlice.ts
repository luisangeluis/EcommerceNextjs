import { createSlice } from "@reduxjs/toolkit";
import { setIsLoading } from "@/store/slices/loadingSlice";
import { setLoadingErrorMessage } from "./loadingErrorMessageSlice";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isClosed: true,
    data: {},
  },
  reducers: {
    clearCart: () => {
      return {
        isClosed: true,
        data: {},
      };
    },

    setCart: (state, action) => {
      const newState = { ...state };

      Object.assign(newState, action.payload);

      return newState;
    },
  },
});

export default cartSlice.reducer;
export const { clearCart, setCart } = cartSlice.actions;

export const getCart = (userToken: string) => (dispatch) => {
  dispatch(setLoadingErrorMessage({ isLoading: true }));

  const init = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  };

  fetch(`${apiUrl}/api/v1/cart`, init)
    .then((res) => res.json())
    .then((res) => {
      const data = res.response;
      // console.log(data);

      dispatch(setCart({ data }));
      dispatch(setLoadingErrorMessage({ isLoading: false }));
    })
    .catch((error) => console.log(error));
};

export const addProductToCart =
  (userToken: string, productId: string) => (dispatch) => {
    console.log("addProductToCart");
    dispatch(setLoadingErrorMessage({ isLoading: true }));

    const init = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };
    fetch(`${apiUrl}/api/v1/products/${productId}/add-to-cart`, init)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        dispatch(getCart(userToken));
      })
      .catch((error) => console.log(error));
  };

export const updateCartItem =
  (userToken: string, cartItemId: string, data) => (dispatch) => {
    console.log("updateCartItem");
    dispatch(setLoadingErrorMessage({ isLoading: true }));

    const init = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify(data),
    };

    fetch(`${apiUrl}/api/v1/cartItem/${cartItemId}`, init)
      .then((res) => {
        dispatch(getCart(userToken));
      })
      .catch((error) => console.log(error.message));
  };

export const deleteCartItem =
  (userToken: string, cartItem: string) => (dispatch) => {
    console.log("deleteCartItem");
    setLoadingErrorMessage({ isLoading: true });

    const init = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };

    fetch(`${apiUrl}/api/v1/cartItem/${cartItem}`, init)
      .then((res) => {
        console.log(res);

        dispatch(getCart(userToken));
      })
      .catch((error) => console.log(error.message));
  };

//
