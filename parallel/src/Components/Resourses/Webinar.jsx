import React from "react";
import ResoursesItems from "./ResoursesItems";
import WebinarHeadingImg from "./WebinarHeadingImg";
import OrangeHover from "../OrangeHover";
import PartnerWebinar from "./PartnerWebinar";

const Webinar = () => {
  return (
    <>
      <div className="WhitepaperBackgroundImg"></div>

      <div className="w-full -mt-28">
        {/* Heading  */}
        <div className="bg-slate-200/70 p-8 text-5xl text-center">
          {" "}
          Webinars
        </div>
        {/* Rsources Items  */}
        <div className="bg-gray-100 flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center">
          <ResoursesItems title="WHITE PAPERS" />
          <ResoursesItems title="SOLUTION OVERVIEWS" />
          <ResoursesItems title="VIDEOS" />
          <ResoursesItems title="BLOGS" />
          <ResoursesItems title="CASE STUDIES" />
          <ResoursesItems
            title="WEBINARS"
            link="/resources/webinars"
            className="bg-orange-600 text-white"
          />
          <ResoursesItems title="OPEN RAN" />
        </div>
      </div>

      {/* Body  */}

      {/* 1 - para part  */}
      <div className="w-full flex justify-center border border-gray-50">
        <div className="w-11/12">
          <div className="text-xl text-center my-16 mx-28 text-gray-900">
            Join our webinars, live or on-demand, to learn about our unified,
            cloud-native, software-based OpenRAN solutions and All G (5G, 4G,
            3G, 2G) technologies.
          </div>
        </div>
      </div>
      {/* 2 - youtuve video part  */}
      <div className="w-full flex justify-center border border-gray-50">
        <div className="w-11/12 flex justify-center mb-16 flex-col items-center">
          {/* heading  */}

          <div className="text-4xl text-center text-gray-700  my-16">
            5G NSA vs SA: Calculating the right way forward
          </div>

          {/* Video  */}

          <iframe
            className="w-[280px] h-[157px] sm:w-[280px] sm:h-[157px] md:w-[560px] md:h-[315px] lg:w-[560px] lg:h-[315px] "
            src="https://www.youtube.com/embed/jPxHvmyR57w?si=8qn6ymdY9kUsrz8d"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          >
            {" "}
          </iframe>
        </div>
      </div>

      {/* 3 - Heading & Image part */}

      <div className="w-full  flex justify-center border border-gray-50">
        <div className="w-11/12 flex justify-center flex-col">
          {/* heading  */}

          <div className="text-4xl text-center text-gray-700 mt-16 mb-8 ">
            Cloud-Native Webinar Series
          </div>

          {/* green line  */}

          <div className="border border-green-500 w-full"></div>

          {/* text & Img  */}

          {/* 1 */}
          <WebinarHeadingImg
            title="Cloud-Native Open RAN"
            image="https://www.parallelwireless.com/wp-content/uploads/Cloud-Native-Open-RAN-768x424.jpg"
          />

          {/* 2 */}

          <WebinarHeadingImg
            title="Cloud-Native Applications 101"
            image="https://www.parallelwireless.com/wp-content/uploads/Cloud-Native-Applications-101-768x424.jpg"
          />

          <div className="mb-16"></div>
        </div>
      </div>

      {/* 4 - Heading & Image part */}

      <div className="w-full flex justify-center border border-gray-50">
        {/* heading  */}
        <div className="w-11/12 flex justify-center flex-col">
          <div className="text-4xl text-start text-gray-700 mt-16 mb-8">
            Parallel Wireless OpenRAN Solutions Webinar Series
          </div>

          {/* gree line  */}
          <div className="w-full border border-green-500"></div>
          {/* Text & Img  */}

          {/* 1 */}
          <WebinarHeadingImg
            title="On-Demand: Part 1 – Overview"
            image="https://www.parallelwireless.com/wp-content/uploads/OpenRAN-Webinar-Overview.jpg"
          />

          {/* 2  */}
          <WebinarHeadingImg
            title="On-Demand: Part 2 – All G OpenRAN"
            image="https://www.parallelwireless.com/wp-content/uploads/All-G-Unified-OpenRAN-1.jpg"
          />

          {/* 3  */}
          <WebinarHeadingImg
            title="On Demand: Part 3.1 – 5G Use Cases"
            image="https://www.parallelwireless.com/wp-content/uploads/Cover-Slide-v2.jpg"
          />

          {/* 4 */}
          <WebinarHeadingImg
            title="On-Demand: Part 4 – Monetizing 5G"
            image="https://www.parallelwireless.com/wp-content/uploads/Monetizing-5G-600x338.jpg"
          />

          {/* Gray- Text  part */}

          <div className="text-xl text-gray-700 mt-4 mb-8 ">
            Subscribe to our{" "}
            <span>
              {" "}
              <OrangeHover heading="BrightTalk channel" />
            </span>{" "}
            and sign up for the remainder of the OpenRAN series as the sessions
            become available.
          </div>

          <div className="mb-16"></div>
        </div>
      </div>

      {/* Partner Webinar Section  */}
      <PartnerWebinar />
    </>
  );
};

export default Webinar;
