import { createSlice } from "@reduxjs/toolkit";

export const modalContainerSlice = createSlice({
  name: "modalContainer",
  initialState: {
    isOpen: false,
  },
  reducers: {
    setIsOpen: (state, action) => {
      return action.payload;
    },
  },
});

export default modalContainerSlice.reducer;
export const { setIsOpen } = modalContainerSlice.actions;
