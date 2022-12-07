import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import CommonLogin from "../common/commonLogin";
import LoginLeftImage from "../common/LoginLeftImage";
import style from "../css/login.module.scss";
import { users } from "../helper";

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.email == "" || userData.password == "") {
      alert("Please fill all the details");
      return;
    }
    users.push(userData);
    alert("User Registered Successfully");
    navigate("/login");
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
              page="register"
            />
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default Register;
