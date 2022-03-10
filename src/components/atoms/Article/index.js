import React from "react";
import propTypes from "prop-types";

const index = (props) => {
  return (
    <div className="wrapper text-black p-5 d-flex flex-column justify-content-between h-100">
      <h2 className="display-5 fw-bold text-uppercase mb-4">{props.title}</h2>
      <p className="leading-relaxed mb-4">{props.content}</p>
      <p className="text-fade-black-1">{props.date}</p>
    </div>
  );
};

index.propTypes = {
  title: propTypes.string,
  content: propTypes.string,
  date: propTypes.string,
};

export default index;
