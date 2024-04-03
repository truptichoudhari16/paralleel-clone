import React from "react";
import ResoursesItems from "./ResoursesItems";
import ResourseImgPara from "./ResourseImgPara";
import Footer from "../Footer";
import ResourceDiv from "./ResourceDiv";

const Resourses = () => {
  return (
    <>
      <div className="resourcesBackground"></div>

      <div className="w-full -mt-28">
        <div className="bg-slate-200/70 p-8 text-center text-5xl">
          Resources
        </div>

        {/* Rsources Items  */}
        <div className="bg-gray-100 flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center">
          <ResoursesItems title="WHITE PAPERS" link="/resources/white-paper" />
          <ResoursesItems
            title="SOLUTION OVERVIEWS"
            link="/resources/solution-overviews"
          />
          <ResoursesItems
            title="VIDEOS"
            link="https://www.youtube.com/user/ParallelWireless/about"
          />
          <ResoursesItems title="BLOGS" link="/resources/blogs" />
          <ResoursesItems title="CASE STUDIES" link="/resources/case-studies" />
          <ResoursesItems title="WEBINARS" link="/resources/webinars" />
          <ResoursesItems
            title="OPEN RAN"
            link="/resources/openran-resources"
          />
        </div>

        <div className="flex justify-center border py-8">
          <div className="w-9/12">
            <div className="text-4xl text-center text-gray-800">
              Reimagine Your Network.
            </div>
            <div className="text-4xl text-center text-gray-800">
              Reimagine Your Economics
            </div>

            <div className="text-xl text-center mt-8 text-gray-800">
              In this asset library you’ll find solutions brochures, data
              sheets, recorded webinars, and customer videos and case studies to
              learn more about Parallel Wireless world’s leading 5G 4G 3G 2G
              OpenRAN.
            </div>
          </div>
        </div>
      </div>

      <ResourseImgPara />
      <ResourceDiv />
      <Footer />
    </>
  );
};

export default Resourses;
