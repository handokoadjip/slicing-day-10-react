import React from "react";
import propTypes from "prop-types";
import { Button } from "..";

const index = (props) => {
  const className = [
    "image-hover",
    "position-absolute",
    "top-50",
    "start-50",
    "translate-middle",
    "w-100",
    "h-100",
  ];
  className.push(props.className);

  let isCenter = "align-items-start";
  if (props.isCenter) isCenter = "text-center align-items-center";
  let isPadding5 = "";
  if (props.isPadding5) isPadding5 = "p-5";
  if (props.isHover) className.push("o-0");

  return (
    <div className="position-relative">
      <figure className="m-0">
        <img
          className="image img-fluid w-100 h-image-300px"
          src={props.image}
          alt={props.alt}
        />
      </figure>
      <div className={className.join(" ")}>
        <div
          className={`position-relative z-999 d-flex flex-column justify-content-center h-100 text-uppercase ${isCenter} ${isPadding5}`}
        >
          <h2 className="fs-4 fw-medium m-0">{props.title}</h2>
          <p className="fs-6">{props.subtitle}</p>
          <Button href={props.href}>more</Button>
        </div>
      </div>
    </div>
  );
};

index.propTypes = {
  className: propTypes.string,
  title: propTypes.string,
  subtitle: propTypes.string,
  image: propTypes.string,
  alt: propTypes.string,
  href: propTypes.string,
  isCenter: propTypes.bool,
};

export default index;
