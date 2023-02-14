import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer'
import loadingReducer from './loadingReducer'
import productReducer from './productReducer'
import userReducer from './userReducer'

export default configureStore({
  reducer: {
    cart:cartReducer,
    product:productReducer,
    user:userReducer,
    alert:loadingReducer
  },
})