import React from "react";
import { Link } from "react-router-dom";

const CommonLogin = ({ handleSubmit, userData, setUserData, page }) => {
  return (
    <>
      <h1 className="mb-3">
        {page == "login" ? "User Sign In" : "User Sign Up"}
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-outline mb-4">
          <input
            type="email"
            id="form3Example3"
            autoComplete="false"
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
            {page == "login"
              ? "Email address"
              : "Create your email address with us"}
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
            {page == "login" ? "Password" : "Create your password"}
          </label>
        </div>

        <div className="text-center text-lg-start mt-4 pt-2">
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>
            {page == "login" ? "Login" : "Register"}
          </button>
          {page == "login" ? (
            <p class="small fw-bold mt-2 pt-1 mb-0">
              Don't have an account?{" "}
              <Link to="/register" class="link-danger">
                Register
              </Link>
            </p>
          ) : (
            <p class="small fw-bold mt-2 pt-1 mb-0">
              Already have an account?{" "}
              <Link to="/login" class="link-danger">
                Login
              </Link>
            </p>
          )}
        </div>
      </form>
    </>
  );
};

export default CommonLogin;
