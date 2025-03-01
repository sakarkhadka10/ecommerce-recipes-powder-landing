import React from "react";
import AnimatedButton from "./UI/AnimatedButton";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="px-6 md:px-14 py-6 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-11 justify-items-center">
        <div className="space-y-4 flex justify-center items-center  flex-col ">
          <h1 className="text-3xl sm:text-4xl text-center lg:text-start md:text-6xl font-bold ">
            Discover the Art of <br /> Flavor with Our <br /> Premium Spices!
          </h1>
          <div className="space-x-2 sm:space-x-4 space-y-11">
            <AnimatedButton title="Buy Now" />
            <AnimatedButton title="More Product" />
          </div>
        </div>
        <div>
          <Image
            src="/image/hero-spices.webp"
            alt="hero"
            width={400}
            height={250}
            className=" w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
