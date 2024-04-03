import React from "react";
import { FaChevronRight } from "react-icons/fa";
const Orangetext = (props) => {
  return (
    <div>
      <button className="transition duration-500 ease-in-out text-orange-600 text-xl font-bold hover:text-orange-400 hover:underline">
        <div className="flex justify-end  ">
          {" "}
          {props.heading} <FaChevronRight className="mt-1.5 ml-2" />
        </div>
      </button>
    </div>
  );
};

export default Orangetext;
