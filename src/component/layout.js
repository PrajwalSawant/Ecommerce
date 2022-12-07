import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminCheck, getLocalStorage } from "../common/localStorage";
import { setAdminUpdate } from "../slice/adminSlice";
import { setUserUpdate } from "../slice/userSlice";

const Layout = ({ children }) => {
  const user = useSelector((state) => state.user);
  const reduxAdmin = useSelector((state) => state.admin.adminCheck);
  const dispatch = useDispatch();
  const { email, password } = getLocalStorage();
  const { adminCheck } = getAdminCheck();
  const checkUserStatus = () => {
    if (user.loginCheck == false || user.userData == null) {
      if (email && password) {
        dispatch(setUserUpdate({ email, password }));
      }
    }
    if (reduxAdmin == false) {
      if (adminCheck == "true") {
        dispatch(setAdminUpdate(true));
      }
    }
  };

  useEffect(() => {
    checkUserStatus();
  }, []);
  return <>{children}</>;
};

export default Layout;
