import { createSlice } from "@reduxjs/toolkit";

const loadingSlide = createSlice({
  name: "loading",
  initialState: false,
  reducers: {
    setIsLoading: (state, action) => action.payload,
  },
});

export default loadingSlide.reducer;
export const { setIsLoading } = loadingSlide.actions;
