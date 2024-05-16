import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
  name: "alert",
  initialState: "",
  reducers: {
    setAlert: (state, action) => action.payload,
  },
});

export default alertSlice.reducer;
export const { setAlert } = alertSlice.actions;
