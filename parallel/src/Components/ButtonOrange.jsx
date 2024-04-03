import React from "react";

function ButtonOrange(props) {
  return (
    <div>
      <button className="transition duration-500 ease-in-out bg-orange-600  text-white text-sm border font-bold border-orange-600 px-6 py-2 rounded-xl hover:bg-white hover:text-orange-600">
        {props.heading}
      </button>
    </div>
  );
}

export default ButtonOrange;
