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
                    <div key={index} className=" p-8 lg:col-span-1 lg:row-span-1 h-[200px] lg:h-auto bento-cell relative group  flex flex-col"
                    style={{background: pub.color}}
                    >
                    {
                      index === 0 ? 
                      <span className=' font-heading-barlow text-2xl uppercase italic font-bold mb-2 text-center'>
                      Selected works in progress
                  </span>
                      :
                      pub.title
                    }
                     {index !== 0 && <button 
                className='py-2 px-1 border-2 border-textBrown rounded-xl w-[150px] text-textBrown font-subtext-mont hover:scale-105 duration-300 mt-4' 
                
            >
                View Abstract
            </button>}
                    <div className='absolute right-4 bottom-4 group-hover:scale-[1.5] duration-300'>
                   
                    </div>
                  </div>
                )
            })}
          
                <div className=" p-4 lg:col-span-3 lg:row-span-1 h-[600px] lg:h-auto bento-cell bg-[#FFFBEB] flex-col w-full">
                    <p className=' font-heading-barlow text-xl font-bold mb-2'>
                        My other publications
                    </p>
                <div>
              {publications.map((pub) => {
                return (
                    <div className='my-1 flex '>
                      <span className="mr-2">•</span> 
                        <Link href={pub.link} >
                        {pub.title}
                        </Link>
                    </div>
                )
              })}
              </div>
            </div>
          </div>

    </div>
          
        );
      }
      
  

export default Publications;