import React from "react";
import { NavLink } from "react-router-dom";

const ResoursesItems = (props) => {
  const propsItems = {
    ...props.propsItems,
    className: `text-sm px-5 py-5 flex hover:text-white hover:bg-orange-600 transition duration-500 ease-in-out ${props.className}`,
    to: `${props.link}`,
  };
  return (
    <div>
      {props.children ? (
        props.children
      ) : (
        <NavLink {...propsItems}>{props.title}</NavLink>
      )}
    </div>
  );
};

export default ResoursesItems;
