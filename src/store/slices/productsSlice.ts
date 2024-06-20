import { createSlice } from "@reduxjs/toolkit";

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
