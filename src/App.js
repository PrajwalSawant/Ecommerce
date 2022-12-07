import React from "react";
import Navbar from "./component/navbar";
import { Provider } from "react-redux";
import GlobalStore from "./store";
import { Route, Routes } from "react-router";
import { Navigate } from "react-router-dom";
import Layout from "./component/layout";

//Routes  -> user No LoggedIn
import Home from "./component/home";
import Login from "./component/login";
import Register from "./component/register";
import AddProduct from "./component/addProduct";
import PrivateRoute from "./common/PrivateRoute";
import PublicRoute from "./common/PublicRoute";
import Page404 from "./component/page404";

const App = () => {
  return (
    <>
      <Provider store={GlobalStore}>
        <Layout>
          <Navbar />
          <Routes>
            {/* Public Routes */}
            <Route element={<PublicRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/page404" element={<Page404 />} />
            </Route>
            {/* Private Routes */}

            <Route element={<PrivateRoute />}>
              <Route path="/addProduct" element={<AddProduct />} />
            </Route>
            <Route path="*" element={() => <Navigate to="/page404" />} />
          </Routes>
        </Layout>
      </Provider>
    </>
  );
};

export default App;
