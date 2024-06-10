import { createSlice } from "@reduxjs/toolkit";

const loadingErrorMessageSlice = createSlice({
  name: "loadingErrorMessage",
  initialState: {
    isLoading: false,
    isError: false,
    message: "",
  },
  reducers: {
    setLoadingErrorMessage: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    clearLoadingErrorMessage: (state, action) => ({
      isLoading: false,
      isError: false,
      message: "",
    }),
  },
});

export default loadingErrorMessageSlice.reducer;
export const { setLoadingErrorMessage, clearLoadingErrorMessage } =
  loadingErrorMessageSlice.actions;
