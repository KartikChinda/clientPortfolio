import Image from "next/image";
import React from "react";
import { researchInterests } from "../constants/about";

const Hero = () => {
  return (
    <div className="min-h-[80vh] lg:flex lg:justify-around lg:items-center p-8">
      <div className="w-full flex justify-center items-center lg:justify-start lg:items-start flex-col group duration-300">
        <div className=" font-subtext-mont text-2xl italic ml-4 ">
            Hi👋, I am
        </div>
    
        <div className="flex gap-4 mt-1 mb-4 scale-[0.7] md:scale-100 md:group-hover:scale-105  duration-300">
        <div class="relative inline-block font-heading-barlow font-extrabold">

<span class="absolute top-0 left-[2%] text-[#E0C097] font-extrabold text-8xl">
  Shreya
</span>


<span class="relative text-[#2D2424] font-extrabold text-8xl">
  Shreya
</span>
</div>
        <div class="relative inline-block font-heading-barlow font-extrabold">

<span class="absolute top-0 left-[2%] text-[#E0C097] font-extrabold text-8xl">
  Singh
</span>


<span class="relative text-[#2D2424] font-extrabold text-8xl">
  Singh
</span>
</div>

        </div>
        
        <div className="mt-4 font-subtext-mont font-light mb-10 lg:mb-0 text-3xl ml-2">
          I'm a 
          <span className="mx-2 px-2 py-1 border-2 rounded-3xl text-textPeach bg-textBrown border-textBrown group-hover:text-textBrown group-hover:bg-textPeach duration-300">
            Researcher
          </span>.
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
      <div className="w-full flex justify-center items-center  lg:w-[50%]">
        <Image
          src={"/"}
          alt="Notebook"
          priority
          width={300}
          height={300}
          className=" rounded-2xl border-8 border-[#dbb0a15b]"
        />
      </div>
    </div>
  );
};

export default Hero;