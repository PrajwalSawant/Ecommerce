import React from "react";
import Navbar from "./component/navbar";
import { Provider } from "react-redux";
import GlobalStore from "./store";
import { Route, Routes } from "react-router";

//Routes  -> user No LoggedIn
import Home from "./component/home";
import Login from "./component/login";

const App = () => {
  return (
    <>
      <Provider store={GlobalStore}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Provider>
    </>
  );
};

export default App;
