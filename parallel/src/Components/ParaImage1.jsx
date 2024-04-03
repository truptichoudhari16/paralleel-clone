import React from "react";
import Orangetext from "./Orangetext";

const ParaImage1 = () => {
  return (
    <div className="flex items-center justify-between bg-white p-20">
      {/* left info section  */}

      <div className="w-1/2 pr-4">
        <h1 className="text-black text-3xl">5G Starts Here</h1>
        <p className="text-lg text-black">
          Through open collaboration with OpenRAN ecosystem, we’ve created the
          world’s first and largest fully compliant OpenRAN portfolio that
          delivers the next generation of wireless infrastructure at a much
          lower cost, ensuring more equal access to 5G globally. Our
          software-defined and interoperable OpenRAN architecture was designed
          from the ground up to reduce complexity and drive out cost from every
          aspect from the RAN to the Core. We pride ourselves on offering a
          fully automated outdoor or indoor coverage and capacity solutions that
          are easy and cost-effective to deploy and maintain and are software
          upgradable to 5G.
        </p>

        <div className="mt-6">
          <Orangetext heading="Learn more  " />
        </div>
      </div>

      {/* Right image section  */}
      <div className="w-1/2">
        <img
          src="https://www.parallelwireless.com/wp-content/uploads/20211102_5G-Starts-Here-Homepage-585x415px-585x415.jpg"
          alt=""
          className="w-full"
        />
      </div>
    </div>
  );
};

export default ParaImage1;
