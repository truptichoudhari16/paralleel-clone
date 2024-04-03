import React from "react";
import ResoursesItems from "./ResoursesItems";
import WhitePaperBox from "./WhitePaperBox";
import Footer from "../Footer";

const WhitePaper = () => {
  return (
    <>
      <div className="WhitepaperBackgroundImg"></div>
      <div className="w-full -mt-28">
        <div className="bg-slate-200/70 p-8 text-center text-5xl ">
          White Paper
        </div>

        {/* Rsources Items  */}
        <div className="bg-gray-100 flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center">
          <ResoursesItems
            title="WHITE PAPERS"
            className="bg-orange-600 text-white"
          />
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
      </div>

      <div className="w-full flex justify-center my-16 ">
        <div className="w-11/12">
          <div className="grid-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex flex-wrap justify-center gap-8">
            <WhitePaperBox heading="5G NR Logical Architecture and its Functional Splits" />
            <WhitePaperBox heading="Tackling Nework Densification Challenges for 5G PDF" />
            <WhitePaperBox heading="Open RAN Integration : Run With It" />
            <WhitePaperBox heading='Parallel Wireless Creates OpenRAN "ALL G" Radio Acces Network Architecture' />
            <WhitePaperBox heading="Cloud Native Application 101" />
            <WhitePaperBox heading="5G Functional Splits" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default WhitePaper;
