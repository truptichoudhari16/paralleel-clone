import React from "react";
import Orangetext from "./Orangetext";

const ParaImage2 = () => {
  return (
    <div className="flex items-center justify-between bg-white p-20">
      {/* left image section  */}

      <div className="w-1/2">
        <img
          src="https://www.parallelwireless.com/wp-content/uploads/20211102_Reimagine-network-Homepage-585x415.jpg"
          alt=""
          className="w-full"
        />
      </div>

      {/* Right Info section  */}

      <div className="w-1/2 pl-4">
        <h1 className="text-black text-3xl ">Reimagine Your Network</h1>
        <p className="text-lg text-black">
          Parallel Wireless created the world’s only ALL G (5G/4G/3G/2G)
          software-enabled OpenRAN architecture to make delivery of wireless
          coverage or capacity use cases, especially capital intensive 5G,
          affordable as it enables mobile operators and industries to unleash
          the full value of connectivity. With unified across 5G/4G/3G/2G and
          Wi-Fi cloud-native architecture that is open and standardized across
          five key domains – RAN, Edge, Core, Orchestration and Analytics – we
          are committed to the 5G vision of bringing Internet to every person
          and organization for a truly connected world at much lower cost to
          deploy and maintain.
        </p>

        <div className="mt-6">
          <Orangetext heading="Learn more  " />
        </div>
      </div>
    </div>
  );
};

export default ParaImage2;
