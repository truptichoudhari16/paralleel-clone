import React from "react";
import OpenRanHeading from "./OpenRanHeading";
import WhitePaperBox from "./WhitePaperBox";

const OpenRanInfo = () => {
  return (
    <>
      {/* 1 */}
      {/* heading  */}
      <OpenRanHeading heading="Open RAN Frequently Asked Questions" />

      {/* box  */}
      <div className="w-full flex justify-center my-16">
        <div className="w-11/12">
          <div className="grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 flex flex-wrap justify-center gap-8">
            <WhitePaperBox heading="Parallel Wireless Open RAN FAQs" />
          </div>
        </div>
      </div>

      {/* 2 */}
      {/* heading  */}
      <OpenRanHeading heading="Parallel Wireless E-Book" />

      {/* box  */}
      <div className="w-full flex justify-center my-16">
        <div className="w-11/12">
          <div className="grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 flex flex-wrap justify-center gap-8">
            <WhitePaperBox heading="Open Ran Fact Book 2021" />
            <WhitePaperBox heading="Parallel Wireless e-Book: Everything You Need to Know about Open Ran" />
          </div>
        </div>
      </div>

      {/* 3 */}

      {/* heading  */}
      <OpenRanHeading heading="TIP Playbook" />

      {/* box  */}
      <div className="w-full flex justify-center my-16">
        <div className="w-11/12">
          <div className="grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 flex flex-wrap justify-center gap-8">
            <WhitePaperBox heading="Parallel Wireless 2G 3G 4G Open RAN Showcased in Telecom Infra Project Playbook" />
          </div>
        </div>
      </div>

      {/* 4 */}
      {/* heading  */}
      <OpenRanHeading heading="Open RAN 101 Series" />

      {/* box  */}
      <div className="w-full flex justify-center my-16">
        <div className="w-11/12">
          <div className="grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 flex flex-wrap justify-center gap-8">
            <WhitePaperBox heading="OpenRAN: Why, What, How, When" />
            <WhitePaperBox heading="Open RAN Functional Splits Explained" />
            <WhitePaperBox heading="A Timeline of OpenRAN Journey in the Industy" />
            <WhitePaperBox heading="Integration and Beyound" />
            <WhitePaperBox heading="Role of RAN Intelligent Controller" />
            <WhitePaperBox heading="OpenRAN Adoption in the Different Regions" />
          </div>
        </div>
      </div>

      {/* 5 */}
      {/* heading  */}
      <OpenRanHeading heading="Open RAN Educational Blogs" />

      {/* box  */}
      <div className="w-full flex justify-center my-16">
        <div className="w-11/12">
          <div className="grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 flex flex-wrap justify-center gap-8">
            <WhitePaperBox heading="OpenRAN: Why, What, How, When" />
            <WhitePaperBox heading="Open RAN Functional Splits Explained" />
            <WhitePaperBox heading="A Timeline of OpenRAN Journey in the Industy" />
            <WhitePaperBox heading="Integration and Beyound" />
            <WhitePaperBox heading="Role of RAN Intelligent Controller" />
          </div>
        </div>
      </div>

      {/* 6 */}
      {/* heading  */}
      <OpenRanHeading heading="Open RAN Webinars" />

      {/* box  */}
      <div className="w-full flex justify-center my-16">
        <div className="w-11/12">
          <div className="grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 flex flex-wrap justify-center gap-8">
            <WhitePaperBox heading="Webinar Series: Part 1 - Overview" />
            <WhitePaperBox heading="Webinar Series: Part 2 - All G OpenRAN" />
          </div>
        </div>
      </div>

      {/* 7 */}
      {/* heading  */}
      <OpenRanHeading heading="Open RAN Whitepapers" />

      {/* box  */}
      <div className="w-full flex justify-center my-16">
        <div className="w-11/12">
          <div className="grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 flex flex-wrap justify-center gap-8">
            <WhitePaperBox heading="Parallel Wireless Creates OpenRAN “ALL G” Radio Access Network Architecture" />
            <WhitePaperBox heading="An Overview of Key Open RAN Groups" />
          </div>
        </div>
      </div>

      {/* 8 */}
      {/* heading  */}
      <OpenRanHeading heading="Open RAN Videos" />

      {/* box  */}
      <div className="w-full flex justify-center my-16">
        <div className="w-11/12">
          <div className="grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 flex flex-wrap justify-center gap-8">
            <WhitePaperBox heading="OpenRAN: Why, What, How, When" />
            <WhitePaperBox heading="Open RAN Functional Splits Explained" />
            <WhitePaperBox heading="A Timeline of OpenRAN Journey in the Industy" />
            <WhitePaperBox heading="Integration and Beyound" />
            <WhitePaperBox heading="Role of RAN Intelligent Controller" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OpenRanInfo;
