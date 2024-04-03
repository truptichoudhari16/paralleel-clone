import React from "react";
import ImgParaInfo from "../Solution/ImgParaInfo";

const CompanyImgPara = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-11/12">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-8 mb-12">
          {/* first section  */}
          {/* info section  */}
          <div className="flex flex-col justify-center items-center order-2 sm:order-2 md:order-1 lg:order-1">
            <ImgParaInfo
              heading="Leadership"
              description="The Parallel Wireless team has experience building every component of the cellular network across 2G, 3G, 4G and 5G. We have built many companies from scratch into the leading industry players. For the past 7+ years, our amazing team has been reimagining the architecture of the cellular networks to make deploying and maintaining any G networks, including 5G, easy and cost-effective."
              btn="Learn More ->"
            />
          </div>

          {/* Img sec  */}
          <div className="order-1 sm:order-1 md:order-2 lg:order-2">
            <img
              src="https://www.parallelwireless.com/wp-content/uploads/leadership-image-585x415.jpg"
              alt=""
              className="w-full"
            />
          </div>

          {/* Second Section  */}

          {/* Img sec  */}
          <div className="order-3 sm:order-3 md:order-3 lg:order-3">
            <img
              src="https://www.parallelwireless.com/wp-content/uploads/parallel-reimagine-585x415.jpg"
              alt=""
              className="w-full"
            />
          </div>

          {/* info section  */}
          <div className="flex flex-col justify-center items-center order-4 sm:order-4 md:order-4 lg:order-4">
            <ImgParaInfo
              heading="Our Culture"
              description="We are a fast-moving technology company that is proud of what we do, ambitious about innovation and collaboration, and keenly focused on our customers’ success."
              btn="Join Our Global Team  ->"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyImgPara;
