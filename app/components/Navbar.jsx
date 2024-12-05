"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-transparent py-4">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 flex items-center justify-between">
        <div className="text-3xl text-textBrown  font-heading-barlow font-extralight">
          SS
        </div>

        <div className="hidden md:flex space-x-8">
          <Link
            href="#resume"
            className="text-textBrown text-[17px] font-light hover:font-medium duration-300 font-subtext-mont"
          >
            Resume
          </Link>
          <Link
            href="#university"
            className="text-textBrown [17px] font-light hover:font-medium duration-300 font-subtext-mont "
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
            href="#resume"
            className="block text-textBrown text-lg font-medium hover:underline hover:text-orange-500 transition py-2"
          >
            Resume
          </Link>
          <Link
            href="#university"
            className="block text-textBrown text-lg font-medium hover:underline hover:text-orange-500 transition py-2"
          >
            Visit My University Page
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
