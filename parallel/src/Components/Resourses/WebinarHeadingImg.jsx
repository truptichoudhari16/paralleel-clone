import React from "react";
import BlackHover from "./BlackHover";
import { NavLink } from "react-router-dom";

const WebinarHeadingImg = (props) => {
  return (
    <div>
      {/* heading props  */}
      <div className="my-4 ">
        <BlackHover heading={props.title} />
      </div>

      {/* Image props  */}
      <NavLink className="w-full flex justify-center items-center">
        <img
          src={props.image}
          alt="image"
          className="w-full p-2 sm:w-full md:w-6/12 lg:w-6/12"
        />
      </NavLink>
    </div>
  );
};

export default WebinarHeadingImg;
