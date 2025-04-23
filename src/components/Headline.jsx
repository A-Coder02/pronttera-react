import React from "react";

const Headline = (props) => {
  return (
    <h1 className="text-green-500 text-5xl max-w-48 mb-8">{props.children}</h1>
  );
};

export default Headline;
