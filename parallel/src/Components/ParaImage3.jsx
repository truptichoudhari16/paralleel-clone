import React from "react";
import Orangetext from "./Orangetext";

const ParaImage3 = () => {
  return (
    <div className="flex items-center justify-between bg-white p-20">
      {/* left info section  */}

      <div className="w-1/2 pr-4">
        <h1 className="text-black text-3xl">Reimagine Your Economics</h1>
        <p className="text-lg text-black">
          The company’s end-to-end ALL G cloud-native OpenRAN portfolio is
          designed to help our customers modernize their networks, reduce
          deployment cost and complexity, increase operational efficiency, find
          new revenue streams and start deploying multi-vendor 5G networks
          today. Software innovation and openness across 5G/4G/3G /2G and Wi-Fi
          coupled with network automation drives TCO reduction for low-density
          or high density use cases of up to 60% for CAPEX and 65% for OPEX.
        </p>

        <div className="mt-6">
          <Orangetext heading="Learn more  " />
        </div>
      </div>

      {/* Right image section  */}
      <div className="w-1/2">
        <img
          src="https://www.parallelwireless.com/wp-content/uploads/20211001-REIMAGINE-ECONOMICS-585x415.jpg"
          alt=""
          className="w-full"
        />
      </div>
    </div>
  );
};

export default ParaImage3;
