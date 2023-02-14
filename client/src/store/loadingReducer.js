import {createSlice } from "@reduxjs/toolkit";


export const loadingSlice = createSlice({
  name: "alert",
  initialState: {
    addToCartAlert: null,
  },
  reducers: {
    buttonclick: (state, action) => {
state.addToCartAlert=action.payload

    },
  }
  
});
export const { buttonclick } = loadingSlice.actions;

export default loadingSlice.reducer;
