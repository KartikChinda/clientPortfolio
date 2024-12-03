"use client";
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { workEx } from '../constants/workex_and_education';


const WorkEx = () => {
  return (
    <div className='p-8'>
        <div className='mt-4 mb-20 w-full text-right p-4'>
          <p className="text-6xl md:text-8xl mt-1 font-bold  text-textBrown font-heading-barlow uppercase">
            Work Experience.
          </p>
        </div>
        <VerticalTimeline>
            {workEx.map((workExperience, index) => {
                return (
                    <VerticalTimelineElement
            visible={true}
            key={index}
                className=""
                contentStyle={{ background: '#292420', color: '#000', borderRadius: "15px" }}
                iconStyle={{ background: "#fff", border: "4px solid black", overflow: "hidden", height: "50px", width: "50px" }}
                icon={
                    <div className='flex justify-center items-center w-full h-full '>
                        <img
                            src={workExperience.orgLogo.src}
                            className='object-contain'
                        />
                    </div>
                }
            >
                <div className='flex flex-col text-textPeach font-subtext-mont p-4 text-lg'>
                <div className='font-heading-barlow tracking-wider text-xl'>
                    {workExperience.title}
                </div>
                <div className='mt-1 font-semibold'>
                    {workExperience.organization}
                </div>
                <div className='mt-2 text-sm rounded-xl  border-bgPeach font-light  font-subtext-mont'>
                    {workExperience.duration}
                </div>
                <ul className='mt-4 list-disc list-inside'>
                    {workExperience.information.map((info) => {
                        return (
                            <li>
                                {info}
                            </li>
                        )
                    })}
                </ul>
                </div>
               
                
                
            </VerticalTimelineElement>
                )
            })}
  
        </VerticalTimeline>
    </div>
  )
}

export default WorkEx