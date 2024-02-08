import React from "react";
import { Container } from "react-bootstrap";
import Img from "../assetse/avataaars.svg";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#1abc9c", minHeight: "85vh" }}>
      <Container
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ color: "white" }}
      >
        <img className="logo" src={Img} alt="Logo" />
        <p style={{ marginTop: "20px", fontSize: "38px", fontWeight: "bold" }}>
          START FRAMEWORK
        </p>
        <div class="d-flex align-items-center justify-content-center mb-3">
          <div className="line me-3 bg-white"></div>
          <i className="fa-solid fa-star text-white"></i>
          <div className="line ms-3 bg-white"></div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "5px" }}
        >
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </Container>
    </div>
  );
};

export default Home;
