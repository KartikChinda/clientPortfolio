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
            ""
          }
          target="_blank"
          className="absolute font-black font-hero-heading text-5xl text-center mt-2 md:mt-0 md:text-8xl text-white  tracking-wide"
        >
          Contact me
        </Link>
        <div className="absolute font-semibold z-10 bottom-10  font-subtext-heebo">
        
        </div>
      </div>
    </section>
  );
};

export default Contact;