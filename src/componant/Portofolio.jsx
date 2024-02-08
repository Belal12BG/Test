import React from "react";
import img1 from "../assetse/img1.jpeg";
import img2 from "../assetse/img2.jpeg";
import img3 from "../assetse/img3.jpeg";

export default function Portofolio() {
  return (
    <div className="container mt-2">
      <h2
        className="text-center mb-3"
        style={{ fontWeight: "bold", fontSize: "45px", color: "#2c3e50" }}
      >
        PORTFOLIO COMPONENT
      </h2>
      <div class="d-flex align-items-center justify-content-center mb-3">
        <div className="line me-3 bg-dark"></div>
        <i className="fa-solid fa-star color"></i>
        <div className="line ms-3 bg-dark "></div>
      </div>
      <div className="photo-1 pt-4 pb-3">
        <div className="row gx-3 gy-4 justify-content-center">
          <div className="col-md-4">
            <img
              src={img1}
              alt="Logo 1"
              className="img-fluid"
              style={{
                borderRadius: "10px 10px 10px 10px",
              }}
            />
          </div>
          <div className="col-md-4">
            <img
              src={img2}
              alt="Logo 1"
              className="img-fluid"
              style={{
                borderRadius: "10px 10px 10px 10px",
              }}
            />
          </div>
          <div className="col-md-4">
            <img
              src={img3}
              alt="Logo 1"
              className="img-fluid"
              style={{
                borderRadius: "10px 10px 10px 10px",
              }}
            />
          </div>
        </div>
      </div>
      <div className="photo-2 pt-4 pb-3">
        <div className="row gx-3 gy-4 justify-content-center">
          <div className="col-md-4">
            <img
              src={img1}
              alt="Logo 1"
              className="img-fluid"
              style={{
                borderRadius: "10px 10px 10px 10px",
              }}
            />
          </div>
          <div className="col-md-4">
            <img
              src={img2}
              alt="Logo 1"
              className="img-fluid"
              style={{
                borderRadius: "10px 10px 10px 10px",
              }}
            />
          </div>
          <div className="col-md-4">
            <img
              src={img3}
              alt="Logo 1"
              className="img-fluid"
              style={{
                borderRadius: "10px 10px 10px 10px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
