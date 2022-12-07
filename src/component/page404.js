import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <>
      <h1>Page Not Found</h1>
      <Link to="/">
        <button type="button" class="btn btn-outline-primary">
          Go to Home Page
        </button>
      </Link>
    </>
  );
};

export default Page404;
