import React from "react";
import ResoursesItems from "./ResoursesItems";
import WhitePaperBox from "./WhitePaperBox";
import Footer from "../Footer";

const SolutionOverviews = () => {
  return (
    <>
      <div className="WhitepaperBackgroundImg"></div>
      <div className="w-full -mt-28">
        {/* Heading Div  */}
        <div className="bg-slate-200/70 p-8 text-center text-5xl ">
          Solution Overviews
        </div>

        {/* Rsources Items  */}
        <div className="bg-gray-100 flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center">
          <ResoursesItems title="WHITE PAPERS" />
          <ResoursesItems
            title="SOLUTION OVERVIEWS"
            link="/resources/solution-overviews"
            className="bg-orange-600 text-white"
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
      </div>

      <div className="w-full flex justify-center my-16 ">
        <div className="w-11/12">
          <div className="grid-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex flex-wrap justify-center gap-8">
            <WhitePaperBox heading="Urban Macro Open RAN" />
            <WhitePaperBox heading="2G Solution Overview" />
            <WhitePaperBox heading="4G Solution Overview" />
            <WhitePaperBox heading="5G Solution Overview" />
            <WhitePaperBox heading="5G Ultra Dense Deployment Overview" />
            <WhitePaperBox heading="Future 5G Dense Urban Deployments Overview" />
            <WhitePaperBox heading="OpenRAN Overview" />
            <WhitePaperBox heading="OpenRAN Software Solution Overview" />
            <WhitePaperBox heading="Outdoor Coverage Solution Overview" />
            <WhitePaperBox heading="Tackling Network Densification Challenges for 5G" />
            <WhitePaperBox heading="OpenRAN Controller Solution Overview" />
            <WhitePaperBox heading="4G Densification" />
            <WhitePaperBox heading="Changing the Mobile Networks Economics with Parallel Wireless OpenRAN" />
            <WhitePaperBox heading="What Happens to Deployment TCO When Mobile Operators Deploy OpenRAN Only For 5G" />
            <WhitePaperBox heading="Cloud-Native Open RAN" />
            <WhitePaperBox heading="Open RAN Automation" />
            <WhitePaperBox heading="Optimizing Total Cost of Ownership for Mobile Networks" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SolutionOverviews;
