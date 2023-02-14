import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async () => {
      const res = await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API}/auth/login/success`,
        withCredentials:true
      });
    return res.data;
  }
);
export const requestLogout = createAsyncThunk(
  "logout/reqLogout",
  async () => {
      const res = await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API}/auth/logout`,
        withCredentials:true
      });
    return res.data;
  }
);

export const productSlice = createSlice({
  name: "user",
  initialState: {
    data: {},
  },
  reducers: {
  },
  extraReducers:(builder)=>{
builder.addCase(fetchUser.fulfilled,(state,action)=>{
  state.data=action.payload
}).addCase(requestLogout.fulfilled,(state,action)=>{
  state.data=action.payload
})
  }
});
export default productSlice.reducer;
