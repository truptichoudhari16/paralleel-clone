import React from "react";
import BlackHover from "./BlackHover";
import { NavLink } from "react-router-dom";

const PartnerwebinarInfo = (props) => {
  return (
    <div>
      {/* heading section  */}
      <div className="mb-4 mt-10">
        <BlackHover heading={props.title} />
        <span className="text-gray-600 text-3xl">{props.host}</span>
        <BlackHover heading={props.title2} />
      </div>

      {/* Image section  */}

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* image  */}
        <div>
          <NavLink className="w-full flex justify-center items-center">
            <img src={props.image} alt="" className="w-full" />
          </NavLink>
        </div>

        {/* logo  */}
        <div>
          <NavLink className="w-full flex gap-6 ">
            <img src={props.logo} alt="" className="h-32" />
            <img src={props.logo2} alt="" className="h-24 gap-8" />
            <img src={props.logo3} alt="" className="h-22 ml-48 m-16 " />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PartnerwebinarInfo;
