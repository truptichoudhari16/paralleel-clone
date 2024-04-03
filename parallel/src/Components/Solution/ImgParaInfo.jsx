import React from "react";
import OrangeHover from "../OrangeHover";

const ImgParaInfo = (props) => {
  return (
    <div className="w-9/12">
      <div className="text-3xl font-medium">{props.heading}</div>
      <div className="text-xl mb-8">{props.description}</div>
      <OrangeHover heading={props.btn} />
    </div>
  );
};

export default ImgParaInfo;
