// @ts-nocheck
"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import WebGLFluidEnhanced from "webgl-fluid-enhanced";

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const simulation = new WebGLFluidEnhanced(containerRef.current);
      simulation.setConfig({
        densityDissipation: 0.8,
        velocityDissipation: 0.4,
        pressure: 0.5,
        curl: 4,
        colorPalette: ["#F4BA0C", "#DA9A05", "#B37E00"],
        bloom: false,
        colorful: false,
        backgroundColor: "#000000"
      });
      simulation.start();

      return () => {
        simulation.stop();
      };
    }
  }, []);

  return (
    <section className="w-screen h-screen flex justify-center items-center flex-col">
      <div
        ref={containerRef}
        className="w-[90%] h-[80%] relative flex flex-col justify-center items-center z-10 text-white "
      >
        <Link
          href={
            "mailto:shreya.singh@uni-bamberg.de"
          }
          target="_blank"
          className="absolute font-black font-hero-heading text-5xl text-center mt-2 md:mt-0 md:text-8xl text-white  tracking-wide"
        >
          Contact me
        </Link>
        <div className="absolute font-semibold z-10 mt-32 text-gray-300 font-subtext-mont text-sm flex justify-center items-center flex-col md:flex-row">
          <Link href={"mailto:shreya.singh@uni-bamberg.de"} className="text-white font-bold text-base">
          shreya.singh@uni-bamberg.de
          </Link> &nbsp; or &nbsp;
          <Link href={"mailto:shreyasingh.econ@gmail.com"} className="text-white font-bold  text-base">
          shreyasingh.econ@gmail.com
          </Link>
        </div>

        <div className="absolute font-semibold z-10 bottom-4 text-gray-100 font-subtext-mont text-sm flex justify-center md:justify-around w-full items-center flex-col md:flex-row gap-8 md:gap-0">
          <div className="flex flex-col text-center md:text-left hover:text-white duration-300 hover:font-bold">
          <div>Office Address</div>
          <div>Room: FG1/00.04, </div>
          <div>Bamberg Graduate School for Social Sciences</div>
          <div>Feldkirchenstr. 21,</div>
          <div>96052 Bamberg, Germany</div>
          </div>
          <div className="hover:text-white duration-300 hover:font-bold">
          Phone: +49(0)951/863-2535
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default Contact;