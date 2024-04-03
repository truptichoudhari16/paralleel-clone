import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import ButtonOrange from "./ButtonOrange";
function App() {
  const slides = [
    {
      url: "https://www.parallelwireless.com/wp-content/uploads/website-banner-3.jpg",
    },
    {
      url: "https://www.parallelwireless.com/wp-content/themes/parallel-wireless/assets/img/pattern-bg.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[100%] h-[750px] w-full py-20  px-0 relative group ">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center  bg-cover duration-500"
      ></div>

      {/* left arrow  */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 taxt-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      {/* right arrow  */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 taxt-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      {/* heading  */}
      <div className="absolute left-12 top-2/4 z-10 ml-6 -mt-8 font-semibold text-white  text-xl sm:text-xl md:text:lg lg:text-3xl w-2/6">
        <p>Pioneering Unprecedented Open RAN Hardware-Agnostic Solutions</p>
        <div className="flex mt-4">
          <ButtonOrange heading="LEARN MORE >>" />
        </div>
      </div>

      {/* dotts  */}
      <div className="flex top-4 justify-center py-6  ">
        {slides.map((slide, slideIndex) => {
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer "
          >
            <RxDotFilled />
          </div>;
        })}
      </div>
    </div>
  );
}

export default App;
