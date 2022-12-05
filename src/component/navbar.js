import React from "react";
import { Link } from "react-router-dom";
import NavBarImage from "../asset/images/bloomzen.png";
import style from "../css/Navbar.module.scss";
const Navbar = () => {
  return (
    <>
      <nav
        className={` ${style.customNavbar}  navbar navbar-expand-lg navbar-dark bg-primary`}>
        <div className="container">
          <a className="navbar-brand" href="">
            <img src={NavBarImage} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <input
                  className="form-control me-2 "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </li>
              <li>
                <button className="btn btn-primary " type="submit">
                  Search
                </button>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/login">
                  Login
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <i class="fa-solid fa-cart-shopping"></i>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
