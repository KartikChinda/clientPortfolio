"use client";
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { education } from '../constants/workex_and_education';


const Education = () => {
  return (
    <div className='p-8'>
        <div className='mt-4 mb-20 w-full p-4'>
          <p className="text-6xl md:text-8xl mt-1 font-bold  text-textBrown font-heading-barlow uppercase">
            Education
          </p>
        </div>
        <VerticalTimeline>
            {education.map((edu, index) => {
                return (
                    <VerticalTimelineElement
            visible={true}
            key={index}
                className=""
                contentStyle={{ background: '#FCFAF6', color: '#000', borderRadius: "15px", border: "2px solid black", boxShadow: "10px 10px 15px rgba(0, 0, 0, 0.3)" }}
                iconStyle={{ background: "#fff", border: "4px solid black", overflow: "hidden", height: "50px", width: "50px" }}
                contentArrowStyle={{visibility: "hidden"}}
                icon={
                    <div className='flex justify-center items-center w-full h-full '>
                        <img
                            src={""}
                            className='object-contain'
                        />
                    </div>
                }
            >
                <div className='flex flex-col text-textBrown font-subtext-mont p-4 text-lg'>
                <div className='font-heading-barlow tracking-wider text-xl'>
                    {edu.university}
                </div>
                <div className='mt-1 font-semibold'>
                    {edu.degree}
                </div>
                <div className='mt-2 text-sm rounded-xl  border-bgPeach font-light  font-subtext-mont'>
                    {edu.dates}
                </div>
               
                </div>
               
                
                
            </VerticalTimelineElement>
                )
            })}
  
        </VerticalTimeline>
    </div>
  )
}

export default Education;