import React from "react";

const OrangeHover = (props) => {
  return (
    <button className="transition duration-500 ease-in-out text-orange-600 text-xl font-bold hover:text-orange-400 hover:underline">
      {props.heading}
    </button>
  );
};

export default OrangeHover;
