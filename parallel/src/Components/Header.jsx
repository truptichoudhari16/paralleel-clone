import React from "react";
import "./Header.css";
import { Search } from "react-feather";
import Buttonwhite from "./Buttonwhite";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="w-full flex justify-center fixed top-0 z-20 bg-white shadow-xl ">
        <div className="w-11/12">
          <nav className="w-full flex justify-start sm:justify-start md:justify-start lg:justify-between items-center p-4">
            {/* Logo div  */}
            <div>
              <NavLink to="">
                <img
                  src="https://www.parallelwireless.com/wp-content/uploads/parallel_wireless.svg"
                  alt="logo"
                  className="h-16"
                />
              </NavLink>
            </div>

            {/* nav-items div  */}
            <div className="hidden sm:hidden md:hidden lg:block">
              <div className="dropdown">
                <NavLink
                  onmouseover="mouseOverToggle()"
                  onmouseout="mouseOutToggle()"
                  id="new"
                  to="solutions"
                  className="text-sm mr-6 relative hover:cursor-pointer hover:text-orange-600 hover:transition-all duration-1000 hover:ease-in-out
            before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-orange-600 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-orange-600 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] 
            "
                >
                  Solutions
                </NavLink>

                <div class="dropdown-content">
                  <NavLink to="/solutions/urban" className="SubItem">
                    Urban
                  </NavLink>
                  <NavLink to="/solutions/rural" className="SubItem">
                    Rural
                  </NavLink>
                  <NavLink to="/solutions/privateLTE" className="SubItem">
                    Private LTE
                  </NavLink>
                </div>
              </div>

              <NavLink
                to="product-techno"
                className="text-sm mr-6 relative hover:cursor-pointer hover:text-orange-600 hover:transition-all duration-1000 hover:ease-in-out
            before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-orange-600 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-orange-600 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] 
            "
              >
                Products and Technologies
              </NavLink>

              <NavLink
                to="customers"
                className="text-sm mr-6 relative hover:cursor-pointer hover:text-orange-600 hover:transition-all duration-1000 hover:ease-in-out
            before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-orange-600 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-orange-600 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] 
            "
              >
                Customers
              </NavLink>

              <div className="dropdown2">
                <NavLink
                  to="company"
                  className="text-sm mr-6 relative hover:cursor-pointer hover:text-orange-600 hover:transition-all duration-1000 hover:ease-in-out
            before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-orange-600 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-orange-600 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] 
            "
                >
                  Company
                </NavLink>

                <div className="dropdown-content2">
                  <NavLink
                    to="/company/who-we-are"
                    className="SubItem2 group relative flex"
                  >
                    Who We Are
                    <div className="absolute -right-40 top-0 invisible group-hover:visible">
                      <NavLink
                        to="/company/who-we-are/mission-vission"
                        className="bg-gray-100 px-8 py-4 text-black hover:text-orange-600"
                      >
                        Mission and Vission
                      </NavLink>
                    </div>
                  </NavLink>

                  <NavLink
                    to="/company/news"
                    className="SubItem2 group relative flex "
                  >
                    News
                    <div className="absolute -right-32 top-0 invisible group-hover:visible">
                      <NavLink
                        to="/company/news/press-releases"
                        className="bg-gray-100 px-8 py-4 text-black hover:text-orange-600"
                      >
                        Press Releases
                      </NavLink>

                      <NavLink
                        to="/company/news/news-coverage"
                        className="bg-gray-100 px-8 py-4 text-black hover:text-orange-600"
                      >
                        News Coverage
                      </NavLink>
                    </div>
                  </NavLink>
                  <NavLink to="/company/leadership" className="SubItem2">
                    Leadership
                  </NavLink>
                  <NavLink to="/company/awards" className="SubItem2">
                    Awards
                  </NavLink>
                  <NavLink
                    to="/company/contacts"
                    className="SubItem2 group relative flex "
                  >
                    Contacts
                    <div className="absolute -right-20 top-0 invisible group-hover:visible">
                      <NavLink
                        to="/company/contacts/support"
                        className="bg-gray-100 px-8 py-4 text-black hover:text-orange-600"
                      >
                        Support
                      </NavLink>
                    </div>
                  </NavLink>
                  <NavLink to="/company/partners" className="SubItem2">
                    Partners
                  </NavLink>
                  <NavLink to="/company/legal" className="SubItem2">
                    Legal
                  </NavLink>
                </div>
              </div>

              {/* Career page  */}
              <NavLink
                to="careers"
                className="text-sm mr-6 relative hover:cursor-pointer hover:text-orange-600 hover:transition-all duration-1000 hover:ease-in-out
            before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-orange-600 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-orange-600 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] 
            "
              >
                Careers
              </NavLink>

              {/* Resourses page  */}
              <div className="dropdown2">
                <NavLink
                  to="resources"
                  className="text-sm mr-6 relative hover:cursor-pointer hover:text-orange-600 hover:transition-all duration-1000 hover:ease-in-out
            before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-orange-600 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-orange-600 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] 
            "
                >
                  Resources
                </NavLink>

                <div className="dropdown-content2">
                  <NavLink
                    to="/resources/white-paper"
                    className="SubItem2 relative flex"
                  >
                    <div>White Paper</div>
                  </NavLink>
                  <NavLink
                    to="/resources/solution-overviews"
                    className="SubItem2"
                  >
                    Solution Overviews
                  </NavLink>
                  <NavLink
                    to="https://www.youtube.com/user/ParallelWireless/about"
                    className="SubItem2"
                  >
                    Videos
                  </NavLink>
                  <NavLink to="/resources/blogs" className="SubItem2">
                    Blogs
                  </NavLink>
                  <NavLink to="/resources/case-studies" className="SubItem2">
                    Case Studies
                  </NavLink>
                  <NavLink to="/resources/webinars" className="SubItem2">
                    Webinars
                  </NavLink>
                  <NavLink
                    to="/resources/openran-resources"
                    className="SubItem2"
                  >
                    OpenRan
                  </NavLink>
                </div>
              </div>

              {/* search page  */}

              <button className="text-xm mr-6  hover:text-orange-600 hover:transition-all duration-1000 hover:ease-in-out">
                <Search size={20} className="-mb-1"></Search>
              </button>

              {/* Contact us page  */}
              <NavLink to="contact-us-form">
                <Buttonwhite heading="CONTACT US" />
              </NavLink>
            </div>
          </nav>
        </div>
      </div>

      <div className="pt-28">
        <Outlet />
      </div>
    </>
  );
};

export default Header;
