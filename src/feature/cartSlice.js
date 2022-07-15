import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCollection, deleteDocument, updateDocumentQuantity } from '../utils/db'

const initialState = {
  items: [],
  totalAmount: 0,
  totalCount: localStorage.getItem('count'),
  status: 'idle',
}

export const getCartItemsAsync = createAsyncThunk('getCart', 
  async () => {
     const collection = getCollection('cart-items')
     return collection
})

export const deleteCartItemsAsync = createAsyncThunk('deleteItem', 
    async (id) => {
      deleteDocument('cart-items', id)
})

export const updateCartItemsAsync = createAsyncThunk('updateItem', 
    async (params) => {
      localStorage.setItem('count', params[1])
      updateDocumentQuantity('cart-items', params[0], parseInt(params[1]))
})

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    total : (state, action) => {
      state.totalAmount = parseInt(action.payload)
    },
    quantity : (state, action) => {
      state.totalCount = parseInt(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getCartItemsAsync.pending, (state) => {
      state.status = 'loading'
    })
    .addCase(getCartItemsAsync.fulfilled, (state, action) => {
      state.status = 'idle'
      state.items = action.payload
    })
    .addCase(deleteCartItemsAsync.pending, (state) => {
      state.status = 'loading'
    })
    .addCase(deleteCartItemsAsync.fulfilled, (state, action) => {
      state.status = 'idle'
      state.items = action.payload
    })
    .addCase(updateCartItemsAsync.pending, (state) => {
      state.status = 'loading'
    })
    .addCase(updateCartItemsAsync.fulfilled, (state, action) => {
      state.status = 'idle'
      state.items = action.payload
    })
  }

})

export const { total, quantity } = cartSlice.actions
export default cartSlice.reducer;