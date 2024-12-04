"use client";
import React from 'react';
import { mainPublication, publications, workingPublications } from '../../constants/publications';
import { ArrowSquareOut } from '@phosphor-icons/react';
import Link from 'next/link';

const Publications = () => {
  return (
    <div className='mt-4'>
       <div className="mt-10 lg:mt-20 flex flex-col justify-center items-center w-full gap-2">
          
          <p className="text-4xl md:text-6xl mt-1 font-bold  text-textBrown font-heading-barlow uppercase p-8 text-center">
          Publications and Ongoing Work
            </p>
          </div>
      <div className="p-8 lg:p-20 grid gap-4 lg:grid-cols-3 lg:grid-rows-3  lg:h-[900px] w-full h-auto">
            <div className=" p-4 lg:col-span-1 lg:row-span-2 h-[400px] lg:h-auto bento-cell bg-[#FFFBEB] relative group ">
              <Link href={mainPublication.link} className='flex flex-col p-4 hover:text-[15.5px] duration-300'>
                {mainPublication.title}
                <div className='mt-4 text-sm font-light italic'>
                  {mainPublication.summary}
                </div>
              </Link>
              <div className='absolute right-4 bottom-4 group-hover:scale-[1.5] duration-300'>
                    <ArrowSquareOut size={32} />
                    </div>
            </div>
            {publications.map((pub, index) => {
                return (
                    <Link target='__blank' href={pub.link} key={index} className=" p-8 lg:col-span-1 lg:row-span-1 h-[200px] lg:h-auto bento-cell relative group hover:text-[15px] duration-300"
                    style={{background: pub.color}}
                    
                    >
                    {pub.title}
                    <div className='absolute right-4 bottom-4 group-hover:scale-[1.5] duration-300'>
                    <ArrowSquareOut size={32} />
                    </div>
                  </Link>
                )
            })}
          
                <div className=" p-4 lg:col-span-3 lg:row-span-1 h-[600px] lg:h-auto bento-cell bg-[#FFFBEB] flex-col w-full">
                    <p className=' font-heading-barlow text-xl font-bold mb-2'>
                        Selected works in progress
                    </p>
                <ul className='list-disc list-inside p-4'>
              {workingPublications.map((pub) => {
                return (
                    <li className=''>
                        {pub}
                    </li>
                )
              })}
              </ul>
            </div>
          </div>

    </div>
          
        );
      }
      
  

export default Publications;