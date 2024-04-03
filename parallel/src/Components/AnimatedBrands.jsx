import React from "react";
import "./AnimatedBrands.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const AnimatedBrands = () => {
  return (
    <div
      className="mt-12 flex overflow-hidden space-x-16 group h-[200px] p-[75px]"
      style={{ backgroundImage: "url(/bg.JPG)", backgroundSize: "cover" }}
    >
      <div class="flex space-x-16 animate-loop-scroll group-hover:paused">
        <img
          loading="lazy"
          src="https://www.parallelwireless.com/wp-content/uploads/MTN-logo.jpg"
          class="max-w-none"
          alt="Image 1"
        />
        <img
          loading="lazy"
          src="https://www.parallelwireless.com/wp-content/uploads/zain-logo.png"
          class="max-w-none"
          alt="Image 2"
        />
        <img
          loading="lazy"
          src="https://www.parallelwireless.com/wp-content/uploads/vodaphone-logo-lg.png"
          class="max-w-none"
          alt="Image 3"
        />
        <img
          loading="lazy"
          src="https://www.parallelwireless.com/wp-content/uploads/smart.png"
          class="max-w-none"
          alt="Image 4"
        />
        <img
          loading="lazy"
          src="https://www.parallelwireless.com/wp-content/uploads/Optimera.png"
          class="max-w-none"
          alt="Image 5"
        />
        <img
          loading="lazy"
          src="https://www.parallelwireless.com/wp-content/uploads/optus-logo.png"
          class="max-w-none"
          alt="Image 6"
        />

        <img
          loading="lazy"
          src="
          https://www.parallelwireless.com/wp-content/uploads/telefonica.png"
          class="max-w-none"
          alt="Image 7"
        />

        <img
          loading="lazy"
          src="https://www.parallelwireless.com/wp-content/uploads/clientlogo-02.png"
          class="max-w-none"
          alt="Image 8"
        />
      </div>

      <div
        class="flex space-x-16 animate-loop-scroll group-hover:paused"
        aria-hidden="true"
      >
        <img
          loading="lazy"
          src="https://www.parallelwireless.com/wp-content/uploads/MTN-logo.jpg"
          class="max-w-none"
          alt="Image 1"
        />
        <img
          loading="lazy"
          src="https://www.parallelwireless.com/wp-content/uploads/zain-logo.png"
          class="max-w-none"
          alt="Image 2"
        />
        <img
          loading="lazy"
          src="https://www.parallelwireless.com/wp-content/uploads/vodaphone-logo-lg.png"
          class="max-w-none"
          alt="Image 3"
        />
        <img
          loading="lazy"
          src="https://www.parallelwireless.com/wp-content/uploads/smart.png"
          class="max-w-none"
          alt="Image 4"
        />
        <img
          loading="lazy"
          src="https://www.parallelwireless.com/wp-content/uploads/Optimera.png"
          class="max-w-none"
          alt="Image 5"
        />
        <img
          loading="lazy"
          src="https://www.parallelwireless.com/wp-content/uploads/optus-logo.png"
          class="max-w-none"
          alt="Image 6"
        />
        <img
          loading="lazy"
          src="
          https://www.parallelwireless.com/wp-content/uploads/telefonica.png"
          class="max-w-none"
          alt="Image 7"
        />

        <img
          loading="lazy"
          src="https://www.parallelwireless.com/wp-content/uploads/clientlogo-02.png"
          class="max-w-none"
          alt="Image 8"
        />
      </div>
    </div>
  );
};

export default AnimatedBrands;
