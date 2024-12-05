"use client";
import React, { useState } from "react";
import { PHDInfo } from "../../constants/PHD";

const PHD = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);

  return (
    <div className="p-8 md:p-16 flex justify-center items-center flex-col">
      <div className="mt-10 lg:mt-20 flex flex-col justify-center items-center w-full gap-2">
        <p className="text-6xl md:text-8xl mt-1 font-bold  text-textBrown font-heading-barlow uppercase">
          Research
        </p>
      </div>
      <div className="w-[90%] mt-4 mb-6 text-xl font-subtext-mont">
        add text about research here.
      </div>
      <div className="mt-10 lg:mt-20 flex flex-col justify-center items-center w-full gap-2">
        <p className="text-4xl md:text-6xl mt-1 font-bold  text-textBrown font-heading-barlow uppercase p-8 text-center">
          My PHD dissertation
        </p>
      </div>
      <div className="w-[80%] mt-4 mb-6 text-xl text-center font-semibold font-heading-barlow">
        A Bargain with Patriarchy: Essays on the Second Demographic Transition,
        Marriage Market and Labour Market Outcomes
      </div>
      <div className="flex flex-col md:w-[80%] text-justify gap-10 p-8 bg-[#FFF6EB] rounded-3xl">
        <div className="font-subtext-mont">
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden`}
            style={{
              maxHeight: visible ? "1000px" : "200px",
              opacity: visible ? 1 : 0.5,
            }}
          >
            {PHDInfo.map((point, index) => (
              <div
                key={index}
                style={{ marginBottom: index === 0 ? "70px" : "0px" }}
              >
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button
            className="py-2 px-1 bg-textBrown rounded-xl w-[150px] text-bgPeach font-subtext-mont hover:scale-105 duration-300"
            onClick={toggleVisibility}
          >
            {visible ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PHD;
