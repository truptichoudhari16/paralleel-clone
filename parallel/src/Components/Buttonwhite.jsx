import React from "react";

const Buttonwhite = (props) => {
  return (
    <button className="transition duration-500 ease-in-out bg-white  text-orange-600  border-2 font-bold border-orange-600 px-4 py-2 rounded-xl hover:bg-orange-600 hover:text-white">
      {props.heading}
    </button>
  );
};

export default Buttonwhite;
