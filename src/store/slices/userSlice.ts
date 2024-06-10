import { createSlice } from "@reduxjs/toolkit";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

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
      const newState = { ...state };

      Object.assign(newState, action.payload);

      return newState;
    },
    clearUser: () => {
      return {
        data: {
          id: "",
          firstName: "",
          lastName: "",
          email: "",
          roleId: "",
        },
        isLoading: false,
        error: "",
      };
    },
  },
});

export const getUser = (token: string) => (dispatch) => {
  const init = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  fetch(`${apiUrl}/api/v1/users/my-user`, init)
    .then((res) => res.json())
    .then((res) => {
      const data = res.response;
      console.log(data);
      dispatch(setUser(data));
    })
    .catch((error) => console.log(error));
};

export default userSlice.reducer;
export const { setUser, clearUser } = userSlice.actions;
