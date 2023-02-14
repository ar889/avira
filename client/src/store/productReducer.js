import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
  },
  reducers: {
  },
  extraReducers:(builder)=>{
builder.addCase(fetchProducts.fulfilled,(state,action)=>{
  state.data=action.payload
})
  }
});
export default productSlice.reducer;
