import React from "react";
import PartnerwebinarInfo from "./PartnerwebinarInfo";
import BlackHover from "./BlackHover";
import { NavLink } from "react-router-dom";
import Footer from "../Footer";

const PartnerWebinar = () => {
  return (
    <>
      <div className="w-full flex justify-center border border-gray-50">
        <div className="w-11/12 flex justify-center flex-col">
          {/* heading  */}
          <div className="mt-16 mb-8 text-4xl text-gray-800 ">
            Partner Webinars
          </div>
          {/* green line  */}
          <div className="w-full border border-green-500"></div>
          {/* Heading & Image & Logo Part  */}
          {/* 1 */}
          <PartnerwebinarInfo
            title="On-Demand: Changing the RAN Deployment Economics Paradigm with OpenRAN"
            host=" - Hosted By "
            title2="Competitive Carriers Association"
            image="https://www.parallelwireless.com/wp-content/uploads/CCA-webinar-screen-cap.jpg"
            logo="https://www.parallelwireless.com/wp-content/uploads/CCA-logo.png"
          />
          {/* 2 */}
          <PartnerwebinarInfo
            title="On-Demand: Changing the Mobile Networks Economics with Parallel Wireless OpenRAN"
            host=" - Hosted By "
            title2="Intel Network Builders"
            image="https://www.parallelwireless.com/wp-content/uploads/Intel-Network-Builders-Webinar.jpg"
            logo="https://www.parallelwireless.com/wp-content/uploads/Intel-logo.png"
          />
          {/* 3 */}
          <PartnerwebinarInfo
            title="O-RAN Solution for 5G"
            hostedby=" – Hosted by Supermicro, with Parallel Wireless and Intel "
            image="https://www.parallelwireless.com/wp-content/uploads/Supermicro-LP.jpg"
            logo="https://www.parallelwireless.com/wp-content/uploads/supermicro-logo-300x158.png"
            logo2="https://www.parallelwireless.com/wp-content/uploads/Intel-logo.png"
          />
          {/* 4  */}
          <PartnerwebinarInfo
            title="Changing the Mobile Networks Economics with Parallel Wireless OpenRAN"
            hostedby=" – Hosted by Russell Lundberg of "
            title2="Cafetele"
            image="https://www.parallelwireless.com/wp-content/uploads/CafeTele-Webinar-_3_.png"
            logo2=""
            logo3="https://www.parallelwireless.com/wp-content/uploads/Logo-small-B.png"
          />

          {/* 5 */}

          <PartnerwebinarInfo
            title="Exploring the Thriving Open RAN Ecosystem Deploying Mobile Networks Around the World"
            hostedby=" - Hosted By "
            title2="iGR Inc."
            image="https://www.parallelwireless.com/wp-content/uploads/iGR-Webinar-Mavenir-Altiostar.png"
            logo=""
            logo2="https://www.parallelwireless.com/wp-content/uploads/IGR-Logo.jpg"
          />

          {/* 6 */}

          {/* heading  */}
          <div className="mt-10 mb-4">
            <BlackHover heading="Delivering Agility, Flexibility & TCO Reduction with Cloud-Native Open RAN " />{" "}
            <span className="text-3xl text-gray-600">– Hosted by </span>
            <BlackHover heading="Intel Network Builders" />
          </div>

          {/* image & Logo  */}

          <div className="grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {/* image  */}
            <NavLink className="w-full flex justify-center items-center">
              <img
                className="w-6/12"
                src="https://www.parallelwireless.com/wp-content/uploads/Partner-Webinar-Amit-Ghadge.jpg"
                alt=""
              />
            </NavLink>

            {/* logo  */}

            <NavLink className="w-full flex">
              <img
                src="https://www.parallelwireless.com/wp-content/uploads/Intel-logo.png"
                alt=""
                className="h-32"
              />
            </NavLink>
          </div>

          {/* 7 */}

          {/* heading  */}
          <div className="mt-10 mb-4">
            <BlackHover heading="Changing the Mobile Networks Economics with Parallel Wireless OpenRAN " />{" "}
            <span className="text-3xl text-gray-600">– Hosted by </span>
            <BlackHover heading="Competitive Carriers Association" />
          </div>

          {/* image & Logo  */}

          <div className="grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {/* image  */}
            <NavLink className="w-full flex justify-center items-center">
              <img
                className="w-6/12"
                src="https://www.parallelwireless.com/wp-content/uploads/Partner-Webinars-2.jpg"
                alt=""
              />
            </NavLink>

            {/* logo  */}

            <NavLink className="w-full flex">
              <img
                src="https://www.parallelwireless.com/wp-content/uploads/CCA-logo.png"
                alt=""
                className="h-32"
              />
            </NavLink>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PartnerWebinar;
