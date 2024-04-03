import React from "react";
import ResoursesItems from "./ResoursesItems";
import WhitePaperBox from "./WhitePaperBox";
import Footer from "../Footer";

const CaseStudies = () => {
  return (
    <>
      {/* Background Image  */}
      <div className="WhitepaperBackgroundImg"></div>

      {/* Heading & Items   */}
      <div className="w-full -mt-28">
        {/* Heading  */}
        <div className="bg-slate-200/70 p-8 text-center text-5xl ">
          Case Studies
        </div>
        {/* Rsources Items  */}
        <div className="bg-gray-100 flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center">
          <ResoursesItems title="WHITE PAPERS" />
          <ResoursesItems
            title="SOLUTION OVERVIEWS"
            link="/resources/solution-overviews"
          />
          <ResoursesItems
            title="VIDEOS"
            link="https://www.youtube.com/user/ParallelWireless/about"
          />
          <ResoursesItems title="BLOGS" link="/resources/blogs" />
          <ResoursesItems
            title="CASE STUDIES"
            link="/resources/case-studies"
            className="bg-orange-600 text-white"
          />
          <ResoursesItems title="WEBINARS" link="/resources/webinars" />
          <ResoursesItems
            title="OPEN RAN"
            link="/resources/openran-resources"
          />
        </div>
      </div>

      {/* Boxes  */}

      <div className="w-full flex justify-center my-16 ">
        <div className="w-11/12">
          <div className="grid-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex flex-wrap justify-center gap-8">
            <WhitePaperBox heading="5G OpenRAN in the UK" />
            <WhitePaperBox heading="BYOC Case Study" />
            <WhitePaperBox heading="Inland Cellular Case Study" />
            <WhitePaperBox heading="Mayutel Case Study" />
            <WhitePaperBox heading="Optus Case Study" />
            <WhitePaperBox heading="Telefonica Case Study" />
            <WhitePaperBox heading="Tier 1 Case Study" />
            <WhitePaperBox heading="Vodafone Case Study" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CaseStudies;
