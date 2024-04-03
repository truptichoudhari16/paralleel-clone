import React from "react";
import ButtonOrange from "./ButtonOrange";

const Career = () => {
  return (
    <div className="flex justify-center items-center bg-gray-200 my-20">
      <div className="py-8">
        <div className="text-3xl  text-center ">Careers</div>
        <div className="text-xl my-4 ">
          View our global openings and apply today to join the team.
        </div>
        <div className="flex justify-center">
          <ButtonOrange heading="JOIN US " />
        </div>
      </div>
    </div>
  );
};

export default Career;
