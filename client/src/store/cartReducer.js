import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// function to add product to Cart
export const sendProducts = createAsyncThunk(
  "products/sendProducts",
  async (product) => {
   
    const res =  await axios({
      method: "post",
      url: `${process.env.REACT_APP_API}/api/cart`,
      data: {
        name: product.title,
        productId: product.id,
        picture: product.image,
        price: product.price,
      },
      withCredentials: true,
    })
      return res.data
    
  }
);

// function to get cart data related to user
export const fetchProducts = createAsyncThunk(
  "getproducts/fetchProducts",
  async () => {
   
    const res =  await axios({
      method: "get",
      url: `${process.env.REACT_APP_API}/api/cart`,
      withCredentials: true,
    })
      return res.data;
  }
);
export const deleteProducts = createAsyncThunk(
  "products/deleteProducts",
  async (id) => {
    const res =  await axios({
      method: "delete",
      url: `${process.env.REACT_APP_API}/api/cart/${id}`,
      withCredentials: true,
    })
      return res.data;
  }
);

export const counterSlice = createSlice({
  name: "cart",
  initialState: {
    value: {},
  },
  reducers: {
    addToCart: (state, action) => {
      state.value.push(action.payload);
    },
    removeFromCart: (state, action) => {

      const newCart = state.value.filter((item) => item.id !== action.payload);
      state.value = newCart;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendProducts.fulfilled, (state, action) => {
}).addCase(fetchProducts.fulfilled,(state,action)=>{
      state.value=action.payload

    }).addCase(deleteProducts.fulfilled,(state,action)=>{
      state.value=action.payload
    })
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = counterSlice.actions;

export default counterSlice.reducer;
