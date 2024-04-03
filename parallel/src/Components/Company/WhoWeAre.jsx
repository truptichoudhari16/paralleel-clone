import React from "react";
import WhoweAreImgPara from "./WhoweAreImgPara";
import Footer from "../Footer";

const WhoWeAre = () => {
  function YtPlay() {
    document.getElementById("video").innerHTML;
  }
  return (
    <div>
      {/* background Image  */}
      <div className="whoweareBgImg"></div>

      {/* Heading & About  */}
      <div className="w-full -mt-28">
        {/* Heading  */}
        <div className="bg-slate-200/70 p-7 text-6xl text-center ">
          Who We are
        </div>

        <div className="flex justify-center border py-8">
          <div className="w-9/12">
            <div className="text-4xl text-center text-bold text-gray-800">
              We Are Reimaginers{" "}
            </div>

            <div className="text-xl text-center mt-8 ">
              We Are Reimaginers Parallel Wireless is the only US company
              challenging the world’s legacy vendors with the industry’s only
              unified ALL G (5G/4G/3G/2G) software-enabled solution. People come
              to work here because we are building the future of telecom. They
              stay, because they are challenged and driven by an incredible
              technology and team. The company is engaged with 50+ leading
              operators worldwide and has been named as a best performing vendor
              by Telefonica and Vodafone. Parallel Wireless’s innovation and
              excellence in multi-technology, open virtualized RAN solutions
              have been recognized with 65+ industry awards.
            </div>
          </div>
        </div>
      </div>

      {/* Image Para section  */}
      <WhoweAreImgPara />

      {/* Youtube video  */}

      <div
        className=" flex justify-center my-16 relative hover:cursor-pointer "
        id="video"
        onClick={YtPlay}
      >
        <iframe
          width="650"
          height="400"
          src="https://www.youtube.com/embed/zO0utxX14Kg?si=iL0ZLvXkkPyDw23E/?autoplay=1"
          title="Youtube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <Footer />
    </div>
  );
};

export default WhoWeAre;
