import React from "react";
import {
  Facebook,
  Headphones,
  Linkedin,
  MapPin,
  X,
  Youtube,
} from "react-feather";

const Footer = () => {
  return (
    <div className="w-full flex justify-center BackgroungImagess ">
      <div className="w-11/12">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 py-8">
          <div className="">
            <div>
              <img
                src="https://www.parallelwireless.com/wp-content/uploads/brand-paralell-wireless.svg"
                alt=""
                className="h-16"
              />
            </div>

            <div className="my-10">
              <div>Follow Us</div>
              <div className="flex">
                <div className="bg-orange-600 rounded-full p-[8px] mr-2">
                  <X color="white" size={16} />
                </div>

                <div className="bg-orange-600 rounded-full p-[8px] mr-2">
                  <Linkedin color="white" size={16} fill="white" />
                </div>
                <div className="bg-orange-600 rounded-full p-[8px] mr-2">
                  <Facebook color="white" size={16} />
                </div>
                <div className="bg-orange-600 rounded-full p-[8px] mr-2">
                  <Youtube color="white" size={16} />
                </div>
              </div>
            </div>
          </div>

          {/* second part  */}
          <div className="">
            <div className="text-xl font-medium text-gray-800">
              IMPORTANT LINKS
            </div>
            <div className="border border-gray-600 w-full mt-2"></div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 mt-2">
              <div className="transition duration-500 ease-in-out text-gray-800 text-lg hover:text-orange-600">
                Resourses
              </div>
              <div className="transition duration-500 ease-in-out text-gray-800 text-lg hover:text-orange-600">
                About Us
              </div>
              <div className="transition duration-500 ease-in-out text-gray-800 text-lg hover:text-orange-600">
                Leadership
              </div>
              <div className="transition duration-500 ease-in-out text-gray-800 text-lg hover:text-orange-600">
                Solutions
              </div>
              <div className="transition duration-500 ease-in-out text-gray-800 text-lg hover:text-orange-600">
                News
              </div>

              <div className="transition duration-500 ease-in-out text-gray-800 text-lg hover:text-orange-600">
                Technologies
              </div>

              <div className="transition duration-500 ease-in-out text-gray-800 text-lg hover:text-orange-600">
                Contact
              </div>

              <div className="transition duration-500 ease-in-out text-gray-800 text-lg hover:text-orange-600">
                Products
              </div>

              <div className="transition duration-500 ease-in-out text-gray-800 text-lg hover:text-orange-600">
                Carrers
              </div>
            </div>
          </div>

          {/* Third Part  */}
          <div className="">
            <div className="text-xl font-medium text-gray-800">CONTACT US</div>
            <div className="border border-gray-600 w-full mt-2"></div>

            <div>
              <div className="flex items-center my-4">
                <Headphones />
                <div className="ml-2">1-603-589-9937</div>
              </div>

              <div className="flex items-center my-4 w-10/12">
                <MapPin size={30} />
                <div className="ml-2">
                  300 Innovative Way, Suite #2310Nashua, NH 03062, USA{" "}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* copyright section  */}
        <div className="mb-10 -mt-6">
          <div className="pl-4">
            © 2024 Parallel Wireless. All rights reserved.
          </div>

          <div className="text-xl lg:flex grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6">
            <div className="flex transition duration-500 ease-in-out text-gray-800 text-lg hover:text-orange-600">
              Privacy Policy{" "}
              <div className="hidden sm:hidden md:block lg:block border-l border border-black mx-2 h-full"></div>
            </div>

            <div className="flex transition duration-500 ease-in-out text-gray-800 text-lg hover:text-orange-600">
              Legal{" "}
              <div className="hidden sm:hidden md:block lg:block border-l border border-black mx-2 h-full"></div>
            </div>

            <div className="flex transition duration-500 ease-in-out text-gray-800 text-lg hover:text-orange-600">
              Cookies{" "}
              <div className="hidden sm:hidden md:block lg:block border-l border border-black mx-2 h-full"></div>
            </div>

            <div className="flex transition duration-500 ease-in-out text-gray-800 text-lg hover:text-orange-600">
              Terms of Use{" "}
              <div className="hidden sm:hidden md:block lg:block border-l border border-black mx-2 h-full"></div>
            </div>

            <div className="flex transition duration-500 ease-in-out text-gray-800 text-lg hover:text-orange-600">
              Trademarks{" "}
              <div className="hidden sm:hidden md:block lg:block border-l border border-black mx-2 h-full"></div>
            </div>

            <div className="flex transition duration-500 ease-in-out text-gray-800 text-lg hover:text-orange-600">
              PO Terms & Condition{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
