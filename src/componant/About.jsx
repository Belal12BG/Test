import React from "react";

const About = () => {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#1abc9c",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p
        style={{
          fontWeight: "bold",
          fontSize: "40px",
          textAlign: "center",
          paddingBottom: "5px",
          color: "white",
          margin: 0,
        }}
      >
        ABOUT COMPONENT
      </p>
      <div class="d-flex align-items-center justify-content-center mb-3">
        <div className="line me-3 bg-white"></div>
        <i className="fa-solid fa-star text-white"></i>
        <div className="line ms-3 bg-white"></div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            // textAlign: "center",
            color: "white",
            flex: 1,
            fontSize: "19px",
            padding: "80px",
            paddingTop: "5px",
            marginRight: "-120px",
          }}
        >
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
        <div
          style={{
            // textAlign: "center",
            color: "white",
            flex: 1,
            padding: "80px",
            paddingTop: "5px",
            fontSize: "19px",
          }}
        >
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
