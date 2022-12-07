import { createSlice } from "@reduxjs/toolkit";

export const AdminSlice = createSlice({
  name: "user",
  initialState: {
    adminCheck: false,
  },
  reducers: {
    setAdminUpdate: (state, action) => {
      state.adminCheck = action.payload;
    },
  },
});

export const { setAdminUpdate } = AdminSlice.actions;
export default AdminSlice.reducer;
