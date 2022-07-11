import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    user: localStorage.getItem('user'),
  },

  reducers: {
    getUser: (state) => {
        return state.user
    },
  },

})

export const {
    getUser,
} = userSlice.actions;

export default userSlice.reducer;