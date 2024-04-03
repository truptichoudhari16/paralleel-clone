import React from "react";

const BlackHover = (props) => {
  return (
    <button className=" text-black text-3xl font-semibold hover:underline hover:text-orange-600 transition duration-500 ease-in-out">
      {props.heading}
    </button>
  );
};

export default BlackHover;
