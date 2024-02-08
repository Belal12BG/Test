import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar2() {
  const [showList, setShowList] = useState(false);

  const handleToggle = () => {
    setShowList(!showList);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-2" to="">
          START FRAMEWORK
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
          aria-expanded={showList ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-dark dark-color  navbar-collapse px-3  ${
            showList ? "show" : ""
          }`}
          id="collapsibleNavId"
        >
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0 fw-bold gap-3">
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="about">
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="portfolio">
                PORTFOLIO
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="contact">
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
