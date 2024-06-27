import { createSlice } from "@reduxjs/toolkit";
import { setLoadingErrorMessage } from "./loadingErrorMessageSlice";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const productsSlice = createSlice({
  name: "products",
  initialState: {
    totalResults: 0,
    totalPages: 0,
    currentPage: 0,
    products: [],
  },
  reducers: {
    setProducts: (state, action) => {
      const newState = { ...state };

      Object.assign(newState, action.payload);

      return newState;
    },
  },
});

export default productsSlice.reducer;
export const { setProducts } = productsSlice.actions;

export const getProducts = () => (dispatch) => {
  console.log("getting products");
  dispatch(setLoadingErrorMessage({isLoading:true}))
  fetch(`${apiUrl}/api/v1/products`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch(setProducts(data));
  dispatch(setLoadingErrorMessage({isLoading:false}))

    });
};
