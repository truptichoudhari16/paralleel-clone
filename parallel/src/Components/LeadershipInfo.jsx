import React from "react";
import Orangetext from "./Orangetext";

const LeadershipInfo = (props) => {
  return (
    <div className="grid-items">
      <div className="flex flex-col justify-center items-center">
        <img src={props.image} alt="" className="h-30 w-30" />
        <div className="text-3xl my-4  text-center text-gray-800">
          {props.heading}
        </div>
        <div className="text-xl text-center text-gray-800">
          {props.description}
        </div>
        <div className="mt-6">
          <Orangetext heading={props.btn} />
        </div>
      </div>
    </div>
  );
};

export default LeadershipInfo;
