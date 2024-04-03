import React from "react";
import ImgParaInfo from "./ImgParaInfo";

const ImgParasec1 = () => {
  return (
    <div w-full flex justify-center>
      <div className="w-11/12">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {/* First section  */}
          {/* Info sec  */}
          <div className="order-2 sm:order-2 md:order-1 lg:order-1 flex flex-col justify-center items-center">
            <ImgParaInfo
              heading="Rural"
              description="Support urban or rural coverage deployments with Parallel Wireless easy to deploy and easy to maintain OpenRAN to deliver optimal subscriber experience at much lower TCO."
              btn="Learn More"
            />
          </div>

          {/* Img sec  */}
          <div className="order-1 sm:order-1 md:order-2 lg:order-2">
            <img
              src="https://www.parallelwireless.com/wp-content/uploads/coverage-img.jpg"
              alt=""
              className="w-full"
            />
          </div>

          {/* Second Section  */}
          {/* Img sec  */}

          <div className=" order-3 sm:order-3 md:order-3 lg:order-3">
            <img
              className="w-full"
              src="https://www.parallelwireless.com/wp-content/uploads/capacity-img-255x181.jpg"
              alt=""
            />
          </div>

          {/* info sec  */}
          <div className=" order-4 sm:order-4 md:order-4 lg:order-4 flex flex-col justify-center items-center">
            <ImgParaInfo
              heading="Urban"
              description="Deliver high throughput, low latency and consistent experience with Parallel Wireless easy to install and maintain, low-cost and high-performing cloud-native 5G 4G 3G 2G architecture for macro or small cell deployments."
              btn="Learn More"
            />
          </div>

          {/* Third section  */}

          {/* Info sec  */}
          <div className=" order-6 sm:order-6 md:order-5 lg:order-5 flex flex-col justify-center items-center">
            <ImgParaInfo
              heading="In-Building"
              description="Deploy reliable indoor coverage solutions at pennies per square foot while reducing the complexity of deployment and maintenance and delivering quality voice and data services to the end user."
              btn="Learn More"
            />
          </div>

          {/* Img sec  */}
          <div className="grid-items order-5 sm:order-5 md:order-6 lg:order-6">
            <img
              className="w-full"
              src="https://www.parallelwireless.com/wp-content/uploads/in-building2.jpg"
              alt=""
            />
          </div>

          {/* Fourth section  */}

          {/* Img sec  */}
          <div className="grid-items order-7 sm:order-7 md:order-7 lg:order-7">
            <img
              className="w-full"
              src="https://www.parallelwireless.com/wp-content/uploads/public-safety.jpg"
              alt=""
            />
          </div>

          {/* Info sec  */}
          <div className="grid-items order-8 sm:order-8 md:order-8 lg:order-8 flex flex-col justify-center items-center">
            <ImgParaInfo
              heading="Public Safety LTE"
              description="Provide Public Safety LTE with our solution to deliver reliable and secure coverage, local organizational control, and resilience to first responders, police and defense organizations in daily and tactical operations."
              btn="Learn More"
            />
          </div>

          {/* Fifth section  */}

          {/* Info Sec  */}
          <div className="grid-items order-8 sm:order-8 md:order-8 lg:order-8 flex flex-col justify-center items-center">
            <ImgParaInfo
              heading="Private LTE"
              description="Provide dedicated, fixed-cost LTE networks for businesses and IoT devices using Parallel Wireless OpenRAN on licensed, shared, or unlicensed spectrum to deliver secure, managed information flow for enterprises of any size."
              btn="Learn More"
            />
          </div>

          {/* Img Sec  */}
          <div className="grid-items order-9 sm:order-9 md:order-9 lg:order-9">
            <img
              className="w-full"
              src="https://www.parallelwireless.com/wp-content/uploads/Images-Private-LTE-585x415.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgParasec1;
