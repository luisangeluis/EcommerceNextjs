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

export const getProducts =
  ({ productInfo, categoryId, page } = {}) =>
  (dispatch) => {
    let queryParams: any = {};

    if (productInfo) queryParams.productInfo = productInfo;
    if (categoryId) queryParams.categoryId = categoryId;
    if (page) queryParams.page = page;

    let queryString = new URLSearchParams(queryParams).toString();
    let url = `${apiUrl}/api/v1/products?${queryString}`;

    dispatch(setLoadingErrorMessage({ isLoading: true }));

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setProducts(data));
      })
      .catch((error) => console.log(error));
    dispatch(setLoadingErrorMessage({ isLoading: false }));
  };
