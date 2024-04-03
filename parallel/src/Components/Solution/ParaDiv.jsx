import React from "react";
import { DownloadCloud } from "react-feather";

const ParaDiv = () => {
  return (
    <div className="w-full flex justify-center bg-gray-200 shadow-2xl mt-16 mb-[2px] py-8">
      <div className="w-11/12">
        <div className="text-2xl text-center text-gray-900">
          Find out how we help our customers roll out services faster and reduce
          OPEX by visiting our resources page to download data sheets and
          solution overviews or watch customer videos or webinar recordings.
        </div>
        <div className="flex justify-center items-center mt-8">
          <DownloadCloud size={56} color="#e85415" />
        </div>
      </div>
    </div>
  );
};

export default ParaDiv;
