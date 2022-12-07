import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import CommonLogin from "../common/commonLogin";
import LoginLeftImage from "../common/LoginLeftImage";
import style from "../css/login.module.scss";
import { users } from "../helper";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { setUserUpdate } from "../slice/userSlice";
import { setAdminCheck, setLocalStorage } from "../common/localStorage";
import { useNavigate } from "react-router";
import { setAdminUpdate } from "../slice/adminSlice";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const adminEmail = process.env.REACT_APP_ADMIN_EMAIL;
  const adminPassword = process.env.REACT_APP_ADMIN_PASSWORD;
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.email == "" || userData.password == "") {
      alert("Please fill all the detail");
      return;
    }
    let user = [];
    users.on("value", (snapShot) => {
      const allUser = snapShot.val();
      _.map(allUser, (data) => {
        user.push(data);
      });
    });
    let verfiedUser = [];
    user.forEach((data) => {
      if (data.email == userData.email && data.password == userData.password) {
        alert("User matched");
        verfiedUser.push(data);
      }
      return null;
    });
    console.log("verfiedUser", verfiedUser);
    if (verfiedUser.length == 0) {
      alert("User is not Registed");
    } else {
      if (adminEmail == userData.email && adminPassword == userData.password) {
        setAdminCheck(true);
        dispatch(setAdminUpdate(true));
        navigate("/addProduct");
      } else {
        navigate("/");
        setAdminCheck(false);
      }
      dispatch(setUserUpdate(verfiedUser[0]));
      setLocalStorage(verfiedUser[0].email, verfiedUser[0].password);
    }
  };
  return (
    <>
      <Row className={style.loginPage}>
        <Col md={6} sm={6}>
          <LoginLeftImage />
        </Col>
        <Col md={6} sm={6} className={style.loginForm}>
          <Col md={8}>
            <CommonLogin
              handleSubmit={handleSubmit}
              userData={userData}
              setUserData={setUserData}
              page="login"
            />
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default Login;
