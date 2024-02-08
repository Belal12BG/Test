import React, { useState } from "react";
import { Container } from "react-bootstrap";

const Contact = () => {
  return (
    <div style={{ color: "#2c3e50", minHeight: "90vh" }}>
      <Container className="d-flex flex-column align-items-center justify-content-center">
        <h2
          className="mt-3 mb-2"
          style={{ fontWeight: "bold", fontSize: "45px" }}
        >
          CONTACT SECTION
        </h2>
        <div class="d-flex align-items-center justify-content-center mb-3">
          <div className="line me-3 bg-dark"></div>
          <i className="fa-solid fa-star color"></i>
          <div className="line ms-3 bg-dark "></div>
        </div>
        <form className="w-50 py-5 mx-auto">
          <label
            htmlFor="userName"
            className=" position-relative top-0"
          ></label>
          <input
            type="text"
            id="userName"
            placeholder="userName :"
            name="userName"
            className=" form-control border-0 border-bottom py-3 shadow-none"
          />
          <label htmlFor="userAge" className=" position-relative top-0"></label>
          <input
            type="text"
            id="userAge"
            placeholder="userAge :"
            name="userAge"
            className=" form-control border-0 border-bottom py-3 shadow-none"
          />
          <label
            htmlFor="userEmail"
            className=" position-relative top-0"
          ></label>
          <input
            type="email"
            id="userEmail"
            placeholder="userEmail :"
            name="userEmail"
            className=" form-control border-0 border-bottom py-3 shadow-none"
          />
          <label
            htmlFor="userPassword"
            className=" position-relative top-0"
          ></label>
          <input
            type="password"
            id="userPassword"
            placeholder="userPassword :"
            name="userPassword"
            className=" form-control border-0 border-bottom py-3 shadow-none"
          />
          <button className="btn green-color text-white my-4">
            Send Message
          </button>
        </form>
      </Container>
    </div>
  );
};

export default Contact;
