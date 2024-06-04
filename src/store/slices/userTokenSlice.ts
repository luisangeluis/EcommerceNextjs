import { createSlice } from "@reduxjs/toolkit";

const userTokenSlice = createSlice({
  name: "userToken",
  // initialState: {
  //   id: "",
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   roleId: "",
  // },
  initialState: "",
  reducers: {
    setUserToken: (state, action) => {
      return action.payload;
    },
  },
});

export default userTokenSlice.reducer;
export const { setUserToken } = userTokenSlice.actions;
