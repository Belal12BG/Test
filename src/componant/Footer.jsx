import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 ml-5">
            <h5>LOCATION</h5>
            <p>
              2215 John Daniel Drive
              <br />
              Clark, MO 65243
            </p>
          </div>
          <div className="col-lg-4">
            <h5>AROUND THE WEB</h5>
            <div className="social-icons mt-4 ">
              <i className="fa-brands fa-facebook mx-1"></i>
              <i className="fa-brands fa-twitter mx-1"></i>
              <i className="fa-brands fa-linkedin mx-1"></i>
              <i className="fa-solid  fa-globe mx-1"></i>
            </div>
          </div>
          <div className="col-lg-4">
            <h5>ABOUT FREELANCER</h5>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
