import { configureStore } from "@reduxjs/toolkit"
import CartReducer from "./feature/cartSlice"
import UserReducer from "./feature/userSlice"
import ProductReducer from "./feature/productSlice"
import { combineReducers } from "redux"

const reducer = combineReducers({
  cart: CartReducer,
  user: UserReducer,
  product: ProductReducer,
});

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export default store;