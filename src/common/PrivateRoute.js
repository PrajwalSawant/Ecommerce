import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getAdminCheck } from "./localStorage";

const PrivateRoute = () => {
  const { adminCheck } = getAdminCheck();
  return adminCheck ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
