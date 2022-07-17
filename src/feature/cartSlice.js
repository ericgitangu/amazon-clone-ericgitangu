import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCollection, deleteDocument, updateDocumentQuantity, addDocument } from '../utils/db'

const initialState = {
  items: [],
  totalAmount: 0,
  totalCount: localStorage.getItem('count'),
  status: 'idle',
}

export const addCartItemsAsync = createAsyncThunk('addItem', 
    async (id,data) => {
      addDocument('cart-items', id, JSON.stringify(data))
      const collection = getCollection('cart-items')
      return collection
})

export const getCartItemsAsync = createAsyncThunk('getCart', 
  async () => {
     const collection = getCollection('cart-items')
     return collection
})

export const deleteCartItemAsync = createAsyncThunk('deleteItem', 
    async (id) => {
      deleteDocument('cart-items', id)
      const collection = getCollection('cart-items')
      return collection
})

export const updateCartItemsAsync = createAsyncThunk('updateItem', 
    async (params) => {
      updateDocumentQuantity('cart-items', params[0], parseInt(params[1]))
      const collection = getCollection('cart-items')
      return collection
})

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    total : (state, action) => {
      state.totalAmount = parseInt(action.payload)
    },
    quantity : (state, action) => {
      state.totalCount = parseInt(action.payload).toString()
    },
    items : (state) => {
      state.totalCount = state.items.length.toString()
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(addCartItemsAsync.pending, (state) => {
      state.status = 'loading'
    })
    .addCase(addCartItemsAsync.fulfilled, (state, action) => {
      state.status = 'idle'
      state.items = action.payload
      state.totalCount += 1
      localStorage.setItem('count', state.totalCount)
    })
    .addCase(getCartItemsAsync.pending, (state) => {
      state.status = 'loading'
    })
    .addCase(getCartItemsAsync.fulfilled, (state, action) => {
      state.status = 'idle'
      state.items = action.payload
      let count = 0
      let ttl = 0
      state.items.forEach((item) => {
        count += item?.quantity
        ttl += item?.quantity * item?.price
      })
      state.totalCount = count
      state.totalAmount = ttl
    })
    .addCase(deleteCartItemAsync.pending, (state) => {
      state.status = 'loading'
    })
    .addCase(deleteCartItemAsync.fulfilled, (state, action) => {
      state.status = 'idle'
      state.items = action.payload
      state.totalCount = state.items.length
      localStorage.setItem('count', state.items.length)
    })
    .addCase(updateCartItemsAsync.pending, (state) => {
      state.status = 'loading'
    })
    .addCase(updateCartItemsAsync.fulfilled, (state, action) => {
      state.status = 'idle'
      state.items = action.payload
      state.totalCount = state.items.length
      localStorage.setItem('count', state.items.length)
    })
  }

})

export const { total, quantity } = cartSlice.actions
export default cartSlice.reducer;