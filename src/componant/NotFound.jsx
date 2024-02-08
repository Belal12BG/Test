import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div>
        <div className="d-flex align-items-center justify-content-center py-5">
          <div className="text-center row">
            <div className=" col-md-6">
              <h1 className=" text-danger">404</h1>
            </div>
            <div className=" col-md-6 mt-3">
              <p className="fs-3">
                {" "}
                <span className="text-danger">Opps!</span> Page not found.
              </p>
              <p className="lead">The page you’re looking for doesn’t exist.</p>
              <Link to="" className="btn btn-primary">
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
