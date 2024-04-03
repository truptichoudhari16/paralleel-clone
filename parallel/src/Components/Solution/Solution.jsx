import React from "react";
import OrangeHover from "../OrangeHover";
import ImgParasec1 from "./ImgParasec1";
import ParaDiv from "./ParaDiv";
import Footer from "../Footer";

const Solution = () => {
  return (
    <>
      {/* Background Image  */}
      <div className="solutionBackground"></div>

      {/* Body  */}

      <div className="w-full -mt-28">
        {/* Heading  */}
        <div className="bg-slate-200/70 p-7 text-6xl text-center ">
          Solutions
        </div>

        <div className="flex justify-center border py-8">
          <div className="w-9/12">
            <div className="text-4xl text-center">Reimagine Your Network.</div>
            <div className="text-4xl text-center">Reimagine Your Economics</div>

            <div className="text-xl text-center mt-8">
              Parallel Wireless created world’s only 5G 4G 3G 2G{" "}
              <span>
                <OrangeHover heading=" OpenRAN" />
              </span>{" "}
              architecture to make delivery of wireless{" "}
              <span>
                <OrangeHover heading="coverage" />
              </span>{" "}
              or
              <span>
                <OrangeHover heading="capacity" />
              </span>{" "}
              use cases, especially capital intensive 5G, affordable as it
              enables mobile operators and industries to unleash the full value
              of connectivity. With unified across 5G 4G 3G 2G cloud-native
              architecture that is open and standardized across five key domains
              – RAN,{" "}
              <span>
                <OrangeHover heading="Edge" />
              </span>
              , Core,{" "}
              <span>
                <OrangeHover heading=" Orchestration" />
              </span>{" "}
              and{" "}
              <span>
                <OrangeHover heading="Analytics" />
              </span>{" "}
              – we are committed to 5G vision of bringing Internet to every
              person and organization for a truly connected world. The company’s
              end-to-end ALL G cloud-native OpenRAN portfolio is designed to
              help our customers modernize their networks, reduce deployment
              cost and complexity, increase operational efficiency, find new
              revenue streams and start deploying multi-vendor{" "}
              <span>
                <OrangeHover heading="5G Networks" />
              </span>{" "}
              today.
            </div>
          </div>
        </div>
      </div>

      {/* Image Para Section  */}
      <ImgParasec1 />

      {/* Para Cloud Section  */}
      <ParaDiv />

      {/* Footer Section  */}
      <Footer />
    </>
  );
};

export default Solution;
