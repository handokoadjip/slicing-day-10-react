import { Img12 } from "assets/source/image";
import { Article } from "components/atoms";
import React from "react";

const index = () => {
  return (
    <div className="container-fluid">
      <div className="row min-vh-50">
        <div className="col-lg-5">
          <Article
            title="latest news"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, dolorum
              perspiciatis dolor ab reiciendis nisi accusamus voluptate temporibus"
            date="One week ago"
          />
        </div>
        <div className="col-lg-2 p-0">
          <div className="wrapper h-100">
            <figure className="m-0 h-100">
              <img
                className="image img-fluid w-100 h-100 object-cover"
                src={Img12}
                alt="image-12"
              />
            </figure>
          </div>
        </div>
        <div className="col-lg-5">
          <Article
            title="about me"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            dolorum perspiciatis dolor ab reiciendis nisi accusamus voluptate
            temporibus"
            date="One week ago"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
