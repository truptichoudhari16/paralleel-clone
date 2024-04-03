import React from "react";
import ImgParaInfo from "../Solution/ImgParaInfo";

const WhoweAreImgPara = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-11/12">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-8 mb-12">
          {/* first section  */}
          {/* info section  */}
          <div className="flex flex-col justify-center items-center ">
            <ImgParaInfo
              heading="Vision and Mission"
              description="Our mission since day one has been to help global mobile operators to reimagine their networks through Parallel Wireless’s unified ALL G cloud- native OpenRAN architecture and the world’s first and largest OpenRAN ecosystem by delivering substantial cost savings to their end users and industries."
              btn="Learn More ->"
            />
          </div>

          {/* Img sec  */}
          <div className="">
            <img
              src="https://www.parallelwireless.com/wp-content/uploads/missionandvision-585x415.jpg"
              alt=""
              className="w-full"
            />
          </div>

          {/* Second Section  */}

          {/* Img sec  */}
          <div className="">
            <img
              src="https://www.parallelwireless.com/wp-content/uploads/sw-wave-585x415-1-255x181.jpg"
              alt=""
              className="w-full"
            />
          </div>

          {/* info section  */}
          <div className="flex flex-col justify-center items-center ">
            <ImgParaInfo
              heading="Reimagine Your Network. Reimagine Your Economics"
              description="We are a fast-moving technology company that is proud of what we do, ambitious about innovation and collaboration, and keenly focused on our customers’ success."
              btn="Learn More  ->"
            />
          </div>

          {/* third section  */}
          {/* info section  */}
          <div className="flex flex-col justify-center items-center ">
            <ImgParaInfo
              heading="Reimaginers Wanted!"
              description="People come to work at Parallel Wireless because they are inspired with our vision to reimagine telecom industry. They stay, because they are motivated by an incredible technology and team and are inspired every day by making a difference. We take pride in our commitment to employee growth, and our culture is built on atmosphere of empowerment, trust, integrity, respect, and open communication. We have assembled an amazing team that helped us to get deployed in over 60 global networks and are looking to expand the team to continue our industry disruption."
              btn="Reimagine Cellular Networks with Us ->"
            />
          </div>

          {/* Img sec  */}
          <div className="">
            <img
              src="https://www.parallelwireless.com/wp-content/uploads/parallel-photo.jpg"
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoweAreImgPara;
