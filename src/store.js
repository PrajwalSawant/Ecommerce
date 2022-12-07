import { configureStore } from "@reduxjs/toolkit";
import AdminSlice from "./slice/adminSlice";
import UserSlice from "./slice/userSlice";

export default configureStore({
  reducer: {
    user: UserSlice,
    admin: AdminSlice,
  },
});
