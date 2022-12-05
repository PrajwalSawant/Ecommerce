import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slice/userSlice";

export default configureStore({
  reducer: {
    user: UserSlice,
  },
});
