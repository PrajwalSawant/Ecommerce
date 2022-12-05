import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import LoginImg from "../asset/images/login-image.jpg";
import style from "../css/login.module.scss";

const Login = () => {
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
    console.log("userData", userData);
  };
  return (
    <>
      <Row className={style.loginPage}>
        <Col md={6} sm={6}>
          <img src={LoginImg} />
        </Col>
        <Col md={6} sm={6}>
          <Col md={8} className="mt-5">
            <form onSubmit={handleSubmit}>
              {/* <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              <p className="lead fw-normal mb-0 me-3">Sign in with</p>
              <button
                type="button"
                className="btn btn-primary btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
              </button>

              <button
                type="button"
                className="btn btn-primary btn-floating mx-1">
                <i className="fab fa-twitter"></i>
              </button>

              <button
                type="button"
                className="btn btn-primary btn-floating mx-1">
                <i className="fab fa-linkedin-in"></i>
              </button>
            </div>

            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">Or</p>
            </div> */}

              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData((prevState) => ({
                      ...prevState,
                      email: e.target.value,
                    }))
                  }
                />
                <label className="form-label" for="form3Example3">
                  Email address
                </label>
              </div>

              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  value={userData.password}
                  onChange={(e) =>
                    setUserData((prevState) => ({
                      ...prevState,
                      password: e.target.value,
                    }))
                  }
                />
                <label className="form-label" for="form3Example4">
                  Password
                </label>
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>
                  Login
                </button>
                <p class="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <a href="#!" class="link-danger">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default Login;
