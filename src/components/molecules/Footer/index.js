import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <footer>
      <div className="container-fluid bg-black">
        <div className="row py-5">
          <div className="col-lg-12">
            <div className="wrapper d-flex flex-column flex-lg-row justify-content-between align-items-center">
              <div className="copyright d-block d-lg-flex justify-content-center align-items-center text-center">
                <div className="text-center text-fade-1 me-0 me-lg-5">
                  <h2 className="mp-0 fs-3 text-uppercase fw-bold ls-7px">
                    phototastic
                  </h2>
                  <p className="mp-0">Lorem ipsum dolor sit amet.</p>
                </div>
                <ul className="text-uppercase d-inline mp-0">
                  <li className="px-1 d-inline">
                    <Link
                      className="nav-link fs-7 fw-bold d-lg-inline d-block text-fade-1"
                      to="#"
                    >
                      home
                    </Link>
                  </li>
                  <li className="px-1 d-inline">
                    <Link
                      className="nav-link fs-7 fw-bold d-lg-inline d-block text-fade-1"
                      to="#"
                    >
                      shop
                    </Link>
                  </li>
                  <li className="px-1 d-inline">
                    <Link
                      className="nav-link fs-7 fw-bold d-lg-inline d-block text-fade-1"
                      to="#"
                    >
                      gallery
                    </Link>
                  </li>
                  <li className="px-1 d-inline">
                    <Link
                      className="nav-link fs-7 fw-bold d-lg-inline d-block text-fade-1"
                      to="#"
                    >
                      features
                    </Link>
                  </li>
                  <li className="px-1 d-inline">
                    <Link
                      className="nav-link fs-7 fw-bold d-lg-inline d-block text-fade-1"
                      to="#"
                    >
                      blog
                    </Link>
                  </li>
                  <li className="px-1 d-inline">
                    <Link
                      className="nav-link fs-7 fw-bold d-lg-inline d-block text-fade-1"
                      to="#"
                    >
                      contact us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="social-media">
                <div className="d-flex justify-content-center align-items-center">
                  <Link
                    className="text-decoration-none mx-3 text-fade-1"
                    to="#"
                  >
                    <i className="fab fa-google-plus-g"></i>
                  </Link>
                  <Link
                    className="text-decoration-none mx-3 text-fade-1"
                    to="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link
                    className="text-decoration-none ms-3 me-5 text-fade-1"
                    to="#"
                  >
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link
                    className="text-decoration-none mx-3 text-fade-1"
                    to="#"
                  >
                    <i className="fas fa-search"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
