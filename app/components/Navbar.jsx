"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-transparent py-4">
      <div className=" mx-auto px-6 sm:px-12 lg:px-20 flex items-center justify-between w-full">
        <div className="text-3xl text-textBrown  font-heading-barlow font-extralight">
          SS
        </div>

        <div className="hidden md:flex space-x-8">
          <Link
            target="__blank"
            href="https://drive.google.com/file/d/1g330A4rTyNuhd8LNH9bbkdy-i4Cy3rHM/view?usp=sharing"
            className="text-textBrown text-[17px] font-light hover:font-medium duration-300 font-subtext-mont"
          >
            Resume
          </Link>
          <Link
            href="#university"
            className="text-bgPeach [17px] font-light hover:font-medium duration-300 font-subtext-mont "
          >
            Visit My University Page
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-textBrown focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 px-6 sm:px-12">
          <Link
            target="__blank"
            href="https://drive.google.com/file/d/1g330A4rTyNuhd8LNH9bbkdy-i4Cy3rHM/view?usp=sharing"
            className="block text-textBrown text-lg font-medium transition py-2"
          >
            Resume
          </Link>
          <Link
            href="#university"
            className="block text-bgPeach text-lg font-medium  py-2"
          >
            Visit My University Page
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
