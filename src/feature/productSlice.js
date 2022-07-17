import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCollection, deleteDocument, updateDocumentQuantity } from '../utils/db'

const initialState = {
  products: [],
  status: 'idle',
}

export const getProductItemsAsync = createAsyncThunk('getProduct', 
  async () => {
     const collection = getCollection('product')
     return collection
})

export const deleteProductItemAsync = createAsyncThunk('deleteItem', 
    async (id) => {
      deleteDocument('product', id)
})

export const updateProductItemsAsync = createAsyncThunk('updateItem', 
    async (params) => {
      localStorage.setItem('count', params[1])
      updateDocumentQuantity('product', params[0], parseInt(params[1]))
})

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addCase(getProductItemsAsync.pending, (state) => {
      state.status = 'loading'
    })
    .addCase(getProductItemsAsync.fulfilled, (state, action) => {
      state.status = 'idle'
      state.products = action.payload
    })
    .addCase(deleteProductItemAsync.pending, (state) => {
      state.status = 'loading'
    })
    .addCase(deleteProductItemAsync.fulfilled, (state, action) => {
      state.status = 'idle'
      state.products = action.payload
    })
    .addCase(updateProductItemsAsync.pending, (state) => {
      state.status = 'loading'
    })
    .addCase(updateProductItemsAsync.fulfilled, (state, action) => {
      state.status = 'idle'
      state.products = action.payload
    })
  }

})

export default productSlice.reducer;