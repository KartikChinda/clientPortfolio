import Image from "next/image";
import React from "react";
import { researchInterests } from "../constants/about";
import { hero } from "../assets";

const Hero = () => {
  return (
    <div className="min-h-[90vh] lg:flex lg:justify-around lg:items-center p-8 mb-10">
      <div className="w-full flex justify-center items-center lg:justify-start lg:items-start flex-col group duration-300">
        <div className=" font-subtext-mont text-2xl italic ml-4 ">Hi, I am</div>

        <div className="flex gap-4 mt-1 mb-4 scale-[0.7] md:scale-100 md:group-hover:scale-105  duration-300">
          <div class="relative inline-block font-heading-barlow font-extrabold">
            <span class="relative text-[#2D2424] font-extrabold text-8xl">
              Shreya
            </span>
          </div>
          <div class="relative inline-block font-heading-barlow font-extrabold">
            <span class="relative text-[#2D2424] font-extrabold text-8xl">
              Singh
            </span>
          </div>
        </div>

        <div className="mt-4 font-subtext-mont font-light mb-10 lg:mb-0 text-3xl ml-2">
          I'm a&nbsp;
          <span className="group-hover:font-bold duration-300 ">
            Researcher
          </span>
          .
        </div>
        <div className="w-[90%] mb-20 lg:mb-0">
          <p className=" mt-16 font-subtext-mont font-xl">
            Research Interests: &nbsp;
            <span className="font-semibold font-subtext-mont">
              {researchInterests}
            </span>
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center items-center  lg:w-[60%]">
        <Image
          src={hero}
          alt="Notebook"
          priority
          width={400}
          height={400}
          className=" rounded-2xl border-8 border-[#dbb0a15b] shadow-xl hover:brightness-105 duration-300 hover:scale-[1.01] hover:shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Hero;
