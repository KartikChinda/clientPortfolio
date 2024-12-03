import React from "react";
import { aboutMe } from "../constants/about";

const AboutMe = () => {

  return (
    <div className="pb-20 w-[90%]">
      <div
        className=" p-4 flex flex-col lg:flex-row justify-center items-stretch"
      >
        <div className="px-8 mt-16 w-full lg:w-[45%] flex justify-center items-start lg:items-end flex-col pr-8 h-full">
          <p className="text-xl  mt-5 font-extralight font-subtext-mont text-black ">
            A glimpse of me
          </p>
          <p className="text-6xl lg:text-7xl xl:text-8xl mt-1 font-bold  text-textBrown font-heading-barlow uppercase text-right w-full">
            About me
          </p>
        </div>
        <div className="w-full lg:w-[60%] px-8 lg:px-20">
          <div className="mt-10 text-lg font-base leading-8  text-textBrown font-subtext-mont">
            {aboutMe.map((sentence) => {
                return (
                    <div className="py-2">
                        {sentence}
                    </div>
                )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;