import { createSlice } from "@reduxjs/toolkit";

export const termsToSearchSlice = createSlice({
  name: "termsToSearch",
    initialState: {
    page: 1,
    productInfo: "",
    categoryId: "",
  },
  reducers:{
    setTermsToSearch:(state,action)=>action.payload
  }
})

export default termsToSearchSlice.reducer;
export const {setTermsToSearch} = termsToSearchSlice.actions;