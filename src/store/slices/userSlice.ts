import { createSlice } from "@reduxjs/toolkit";
import { setLoadingErrorMessage } from "./loadingErrorMessageSlice";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    roleId: "",
    isLoading: false,
    isError: false,
    message: "",
  },
  reducers: {
    setUser: (state, action) => {
      const newState = { ...state };

      Object.assign(newState, action.payload);

      return newState;
    },
    clearUser: () => {
      return {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        roleId: "",
        isLoading: false,
        isError: false,
        message: "",
      };
    },
  },
});

export default userSlice.reducer;
export const { setUser, clearUser } = userSlice.actions;

export const getUser = (token: string) => (dispatch) => {
  // dispatch(setLoadingErrorMessage({ isLoading: true }));

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
      // console.log(data);
      dispatch(setUser(data));
      // dispatch(setLoadingErrorMessage({ isLoading: false }));
    })
    .catch((error) => console.log(error));
};
