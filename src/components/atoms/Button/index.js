import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

const index = (props) => {
  const className = ["btn", "px-5"];
  className.push(props.className);
  if (props.isBlack) {
    className.push("btn-border-black");
  } else {
    className.push("btn-border");
  }

  return (
    <Link className={className.join(" ")} to={props.href}>
      {props.children}
    </Link>
  );
};

index.propTypes = {
  className: propTypes.string,
  isBlack: propTypes.bool,
  href: propTypes.string,
};

export default index;
