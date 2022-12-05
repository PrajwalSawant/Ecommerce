import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    loginCheck: false,
    userData: null,
  },
  reducers: {
    setUserUpdate: (state, action) => {
      state.userData = action.payload;
      state.loginCheck = true;
    },
  },
});

export const { setUserUpdate } = UserSlice.actions;
export default UserSlice.reducer;
