import { Button } from "components/atoms";
import React from "react";

const index = () => {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-lg-12">
          <div className="wrapper">
            <div className="position-absolute top-0 start-0 text-uppercase w-100 w-lg-50 bg-fade-black-1 p-5 text-white">
              <h1 className="display-1 text-navbar fw-bolder leading-not mb-4">
                everest mountain within range
              </h1>
              <p className="mb-4">Lorem ipsum dolor.</p>
              <Button href="#">more</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
