import React from "react";
import { FaChevronRight } from "react-icons/fa";

const WhitePaperBox = (props) => {
  return (
    <div className="">
      <div>
        <div className="group relative block overflow-hidden transition-all duration-500">
          <div className="border-b-8 border-orange-600 flex tobii-zoom duration-500 transition-all lightbox">
            <div className="h-64 w-72 text-center flex justify-center items-center bg-gray-200 py-20 px-4">
              <div className="text-2xl">{props.heading}</div>
            </div>

            <div className="absolute h-full -bottom-full group-hover:bottom-0 right-0 left-0 bg-white dark:bg-orange-600 p-4 shadow dark:shadow-gray-700 transition-all duration-500">
              <div className="flex justify-center items-center h-full">
                <div>
                  <button className="text-white text-xl font-bold flex justify-end">
                    Download <FaChevronRight className="mt-1.5 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhitePaperBox;
