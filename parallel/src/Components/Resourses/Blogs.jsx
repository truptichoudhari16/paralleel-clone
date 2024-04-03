import React from "react";
import ButtonOrange from "../ButtonOrange";
import Orangetext from "../Orangetext";
import { FaChevronRight } from "react-icons/fa";
import Footer from "../Footer";

const Blogs = () => {
  return (
    <>
      <div className="bg-white mt-24">
        {/* First Section  */}

        <div className="w-full text-black bg-gray-200 flex flex-row">
          {/* Left Part  */}
          <div className="w-1/2 p-14 flex flex-col">
            <p className="text-lg">03.14.24</p>

            {/* Line  */}
            <hr className="bg-gray-200 border-0 h-px my-8 dark:bg-gray-700"></hr>

            <h1 className="text-4xl font-bold">Our Annual MWC Recap</h1>
            <p className="text-3xl mt-6">
              The Mobile World Congress in Barcelona is without a doubt the
              flagship event in our calendar, the…
            </p>

            {/* Line  */}
            <hr className="bg-gray-200 border-0 h-px my-8 dark:bg-gray-700"></hr>

            {/* Button  */}
            <div className="ml-[-90px]">
              <div className="flex  justify-start pl-[90px]  bg-opacity-50 hover:bg-opacity-75 text-white text-xl font-bold">
                <ButtonOrange heading=" Continue Reading" />
              </div>
            </div>
          </div>

          {/* Right Part  */}
          <div className="w-1/2 p-12 pt-8 flex justify-center items-center">
            <img
              src="https://www.parallelwireless.com/wp-content/uploads/WhatsApp-Image-2024-03-14-at-14.28.14.jpeg"
              alt=""
              className="h-full w-full rounded-shadow"
            />
          </div>
        </div>

        {/* Second Section  */}

        <div className="bg-white p-12">
          {/* Heading  */}
          <h1 className="text-gray-800 text-center flex justify-center items-center text-4xl p-2 font-bold mb-8 ">
            Most Recent Posts
          </h1>

          {/* Image Info part  */}

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1  */}
            <div className="bg-white overflow-hidden">
              <img
                src="https://www.parallelwireless.com/wp-content/uploads/WhatsApp-Image-2024-01-02-at-15.36.11.jpeg"
                alt="img1"
                className="h-72 w-full cursor-pointer object-cover hover:text-orange-300 hover:scale-110 transition duration-500 "
              />

              <div className="p-4 pl-4">
                <p className="text-xl text-gray-700">01.08.24</p>

                {/* Line  */}
                <hr className="bg-gray-200 border-0 h-px my-8 dark:bg-gray-700"></hr>

                <p className="text-black text-2xl font-bold mb-2">
                  5 Cellular Network Trends to Look Out for in 2024
                </p>

                <p className="text-gray-800 text-xl">
                  Another year has gone by and even though the mobile telecoms
                  industry is over 30 years old,…
                </p>

                {/* Line  */}
                <hr className="bg-gray-200 border-0 h-px my-8 dark:bg-gray-700"></hr>

                {/* Orange Text  */}
                <Orangetext heading=" Read more" />
              </div>
            </div>

            {/* 2  */}

            <div className="bg-white overflow-hidden">
              <img
                src="https://www.parallelwireless.com/wp-content/uploads/Two-path-Banner.jpg"
                alt="img1"
                className="h-72 w-full cursor-pointer object-cover hover:text-orange-300 hover:scale-110 transition duration-500 "
              />

              <div className="p-4 ">
                <p className="text-xl text-gray-700">12.07.23</p>

                {/* Line  */}
                <hr className="bg-gray-200 border-0 h-px my-8 dark:bg-gray-700"></hr>

                <p className="text-black text-2xl font-bold mb-2">
                  Two paths on the way to 5G
                </p>

                <p className="text-gray-800 text-xl">
                  Calculating your path forward The agendas of the dozen or more
                  telecom industry events that took…
                </p>

                {/* Line  */}
                <hr className="bg-gray-200 border-0 h-px my-8 dark:bg-gray-700"></hr>

                {/* Orange Text  */}
                <Orangetext heading=" Read more" />
              </div>
            </div>

            {/* 3  */}

            <div className="bg-white overflow-hidden">
              <img
                src="https://www.parallelwireless.com/wp-content/uploads/transmision-power-control.png"
                alt="img1"
                className="h-72 w-full cursor-pointer object-cover hover:text-orange-300 hover:scale-110 transition duration-500 "
              />

              <div className="p-4 pl-4">
                <p className="text-xl text-gray-700">11.20.23</p>

                {/* Line  */}
                <hr className="bg-gray-200 border-0 h-px my-8 dark:bg-gray-700"></hr>

                <p className="text-black text-2xl font-bold mb-2">
                  Control the power of your network – Power-saving software for
                  your network
                </p>

                <p className="text-gray-800 text-xl">
                  Much has been said of the power consumption of 5G networks.
                  The expectations across the industry are…
                </p>

                {/* Line  */}
                <hr className="bg-gray-200 border-0 h-px my-8 dark:bg-gray-700"></hr>

                {/* Orange Text  */}
                <Orangetext heading=" Read more" />
              </div>
            </div>

            {/* Third Section  */}

            {/* 1  */}
            <div className="bg-white overflow-hidden bg-transparent ">
              {/* 1  */}

              <div className="p-4 ">
                <p className="text-xl text-gray-800">11.20.23</p>

                {/* Line  */}
                <hr className="bg-gray-200 border-0 h-px my-8 dark:bg-gray-600"></hr>

                <p className="text-black text-2xl font-bold mb-2">
                  Our Annual MWC Recap
                </p>

                <p className="text-gray-800 text-xl">
                  The Mobile World Congress in Barcelona is without a doubt the
                  flagship event in our calendar, the…
                </p>

                {/* Line  */}
                <hr className="bg-gray-200 border-0 h-px my-8 dark:bg-gray-700"></hr>

                {/* Orange Text  */}
                <Orangetext heading=" Read more" />
              </div>
            </div>

            {/* 2  */}
            <div className="bg-white overflow-hidden bg-transparent ">
              <div className="p-4 ">
                <p className="text-xl text-gray-800">11.20.23</p>

                {/* Line  */}
                <hr className="bg-gray-200 border-0 h-px my-8 dark:bg-gray-600"></hr>

                <p className="text-black text-2xl font-bold mb-2">
                  5 Cellular Network Trends to Look Out for in 2024
                </p>

                <p className="text-gray-800 text-xl">
                  Another year has gone by and even though the mobile telecoms
                  industry is over 30 years old,…
                </p>

                {/* Line  */}
                <hr className="bg-gray-200 border-0 h-px my-8 dark:bg-gray-700"></hr>

                {/* Orange Text  */}
                <Orangetext heading=" Read more" />
              </div>
            </div>

            {/* Search Bar  */}
            <div className="">
              <h1 className=" text-2xl text-gray-700 p-4"> Search the Blog</h1>

              <div className="bg-gray-200 border z-10 mt-4">
                <form className="flex items-center justify-center p-2">
                  <input
                    type="text"
                    placeholder="enter search term"
                    className="w-full rounded-md text-2xl text-gray-900  bg-gray-200 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="bg-gray-800 text-white  px-4 py-4 ml-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
                  >
                    <FaChevronRight className="mt-0 ml-2 " />
                  </button>
                </form>
              </div>
            </div>

            {/* 1  */}
            <div className="bg-white overflow-hidden bg-transparent ">
              {/* 1  */}

              <div className="p-4 ">
                <p className="text-xl text-gray-800">12.07.23</p>

                {/* Line  */}
                <hr className="bg-gray-200 border-0 h-px my-8 dark:bg-gray-600"></hr>

                <p className="text-black text-2xl font-bold mb-2">
                  Two paths on the way to 5G
                </p>

                <p className="text-gray-800 text-xl">
                  Calculating your path forward The agendas of the dozen or more
                  telecom industry events that took…
                </p>

                {/* Line  */}
                <hr className="bg-gray-200 border-0 h-px my-8 dark:bg-gray-700"></hr>

                {/* Orange Text  */}
                <Orangetext heading=" Read more" />
              </div>
            </div>

            {/* 2  */}
            <div className="bg-white overflow-hidden bg-transparent ">
              <div className="p-4 ">
                <p className="text-xl text-gray-800">11.20.23</p>

                {/* Line  */}
                <hr className="bg-gray-200 border-0 h-px my-8 dark:bg-gray-600"></hr>

                <p className="text-black text-2xl font-bold mb-2">
                  Control the power of your network – Power-saving software for
                  your network
                </p>

                <p className="text-gray-800 text-xl">
                  Much has been said of the power consumption of 5G networks.
                  The expectations across the industry are…
                </p>

                {/* Line  */}
                <hr className="bg-gray-200 border-0 h-px my-8 dark:bg-gray-700"></hr>

                {/* Orange Text  */}
                <Orangetext heading=" Read more" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blogs;
