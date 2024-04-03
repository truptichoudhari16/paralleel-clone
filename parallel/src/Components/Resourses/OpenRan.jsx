import React from "react";
import ResoursesItems from "./ResoursesItems";
import OpenRanInfo from "./OpenRanInfo";
import Footer from "../Footer";

const OpenRan = () => {
  return (
    <>
      {/* background Image  */}
      <div className="openRanBgimg"></div>

      <div className=" w-full -mt-28">
        {/* heading & Items */}

        {/* heading  */}

        <div className="bg-slate-200/70 text-center text-5xl p-8">Open RAN</div>

        {/* Rsources Items  */}
        <div className="bg-gray-100 flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center">
          <ResoursesItems title="WHITE PAPERS" />
          <ResoursesItems title="SOLUTION OVERVIEWS" />
          <ResoursesItems title="VIDEOS" />
          <ResoursesItems title="BLOGS" />
          <ResoursesItems title="CASE STUDIES" />
          <ResoursesItems title="WEBINARS" />
          <ResoursesItems
            title="OPEN RAN"
            link="/resources/openran-resources"
            className="bg-orange-600 text-white"
          />
        </div>
      </div>

      <OpenRanInfo />
      <Footer />
    </>
  );
};

export default OpenRan;
