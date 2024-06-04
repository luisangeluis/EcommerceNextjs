import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    roleId: "",
  },
  reducers: {
    setUser: (state, action) => {
      const { id, firstName, lastName, email, roleId } = action.payload;
      return { id, firstName, lastName, email, roleId };
    },
    clearUser: () => {
      return {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        roleId: "",
      };
    },
  },
});

export default userSlice.reducer;
export const { setUser, clearUser } = userSlice.actions;
