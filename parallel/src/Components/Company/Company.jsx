import React from "react";
import OrangeHover from "../OrangeHover";
import CompanyImgPara from "./CompanyImgPara";
import Footer from "../Footer";

const Company = () => {
  return (
    <div>
      {/* background Image  */}
      <div className="companyBgImg "></div>

      {/* Heading & About  */}
      <div className="w-full -mt-28">
        {/* Heading  */}
        <div className="bg-slate-200/70 p-7 text-6xl text-center ">Company</div>

        <div className="flex justify-center border py-8">
          <div className="w-9/12">
            <div className="text-4xl text-center text-bold text-gray-800">
              About Us{" "}
            </div>

            <div className="text-xl text-center mt-8 text-gray-800">
              Parallel Wireless is leading the OpenRAN movement with the world’s
              first{" "}
              <span>
                <OrangeHover heading=" 5G/4G/3G/2G" />
              </span>{" "}
              cloud-native OpenRAN architecture that is open, standardized, and
              interoperable across five key domains –{" "}
              <span>
                <OrangeHover heading="RAN, Edge, Core, Orchestration  " />
              </span>{" "}
              and{" "}
              <span>
                {" "}
                <OrangeHover heading="Analytics." />
              </span>{" "}
              <br />
              <br />
              Through open collaboration with our OpenRAN ecosystem partners, we
              have created a world first and largest fully-compliant OpenRAN
              ecosystem that is capable of delivering the next generation of
              wireless infrastructure at dramatically lower cost, ensuring more
              equal access to 5G across the globe.
              <br />
              <br />
              Our OpenRAN portfolio is designed to help our customers modernize
              their networks, reduce deployment cost and complexity, increase
              operational efficiency, find new revenue streams, and start
              deploying multi-vendor 5G networks today.
              <br />
              <br />
              Our customers include over 60 global mobile operators, as well as
              private and public industries and governments that are all using
              our software-defined network portfolio to reimagine their networks
              and get ready for 5G.
            </div>
          </div>
        </div>
      </div>

      {/* Image Para section  */}
      <CompanyImgPara />
      <Footer />
    </div>
  );
};

export default Company;
