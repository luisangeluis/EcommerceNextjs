import { createSlice } from "@reduxjs/toolkit";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const productsSlice = createSlice({
  name: "products",
  initialState: {
    totalResults: 0,
    totalPages: 0,
    currentPage: 0,
    products: [],
    isLoading: false,
    isError: false,
    message: "",
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
    dispatch(setProducts({ isLoading: true }));

    let queryParams: any = {};

    if (productInfo) queryParams.productInfo = productInfo;
    if (categoryId) queryParams.categoryId = categoryId;
    if (page) queryParams.page = page;

    let queryString = new URLSearchParams(queryParams).toString();
    let url = `${apiUrl}/api/v1/products?${queryString}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // dispatch(setProducts(data));
        dispatch(setProducts({ ...data, isLoading: false }));
      })
      .catch((error) => console.log(error))
      .finally((fin) => console.log({ fin }));
    // dispatch(setLoadingErrorMessage({ isLoading: false }));
  };
