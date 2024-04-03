import React from "react";
import ButtonOrange from "./ButtonOrange";

const ProductInfo = (props) => {
  return (
    <div className="grid-items border-2">
      <div>
        <img
          src={props.image}
          alt=""
          className="w-full h-72 hover:scale-110 transition duration-500 cursor-pointer object-cover hover:filter-orange"
        />
        <div className="text-3xl my-4  text-gray-800 p-2">{props.heading}</div>
        <div className="text-xl text-gray-800 ">{props.description}</div>
        <div className="mt-6">
          <ButtonOrange heading={props.btn} />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
