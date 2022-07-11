import { configureStore } from "@reduxjs/toolkit"
import CartReducer from "./feature/cartSlice"
import UserReducer from "./feature/userSlice"
import { combineReducers } from "redux"

const reducer = combineReducers({
  cart: CartReducer,
  user: UserReducer,
});

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;