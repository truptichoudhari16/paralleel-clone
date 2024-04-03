import React from "react";
import Orangetext from "./Orangetext";

function CardInfo(props) {
  return (
    <div className="grid-items">
      <div>
        <img
          src={props.image}
          alt=""
          className="w-full h-72 hover:scale-110 transition duration-500 cursor-pointer object-cover hover:text-orange-300"
        />
        <div className="text-3xl my-4  text-gray-800 ">{props.heading}</div>
        <div className="text-xl text-gray-800 ">{props.description}</div>
        <div className="mt-6">
          <Orangetext heading={props.btn} />
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
