import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { CollapsedAtom } from '../atom/Collapsed'
import SideBar from '../components/SideBar'
import DataCard from '../components/DataCard'
import HomeNavBar2 from '../NavigationBar/HomeNavBar2'
import TimeTrackerNavBar from '../NavigationBar/TimeTrackerNavBar'
import { useStopwatch, useTimer } from 'react-timer-hook'



const TimeTracker = () => {
    const isCollapsed = useRecoilValue(CollapsedAtom);

    const [selectedOption1, setSelectedOption1] = useState(""); // Initial state is empty
    const [selectedOption2, setSelectedOption2] = useState("");

    const handleChange1 = (e) => {
        setSelectedOption1(e.target.value); // Update state when dropdown value changes
    };
    const handleChange2 = (e) => {
        setSelectedOption2(e.target.value); // Update state when dropdown value changes
    };

  


    const {
        totalSeconds,
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        reset,
      } = useStopwatch({ autoStart: true });
    

  
    return (
        <>
            <SideBar />
            <TimeTrackerNavBar  />
            <HomeNavBar2 titles={["Timelogs"]} name={"mydata"} main={"timetracker"} />
            <div className={`${isCollapsed ? 'bg-slate-300  w-[95vw] float-end p-16 flex flex-wrap gap-10' : 'bg-slate-300 flex-wrap  w-[80%] float-end  px-28  py-14  flex gap-28'}`}>
                <div className='h-16 w-[95vw] rounded-lg bg-white flex items-center justify-start gap-16 px-14'>
                    <label>
                        <select className='border text-[15px] border-slate-300 rounded-md px-3 py-2' id="dropdown" value={selectedOption1} onChange={handleChange1}>
                            <option value="">Select Project</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </label>
                    <label>
                        <select className='border  text-[15px] border-slate-300 rounded-md px-3 py-2' id="dropdown" value={selectedOption2} onChange={handleChange2}>
                            <option value="">Select Job</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </label>
                    <label>
                        <input className='border  text-[15px] border-slate-300 rounded-md  pl-2 pr-5 py-2' name='Work' placeholder='what are you working on?' />
                    </label>
                   <div className={`${isCollapsed ? 'flex items-center justify-center ml-80' : 'flex items-center justify-center gap-2'}`}>
                        <div className={`${isCollapsed ? 'bg-green-400 text-[15px] px-6 py-2 rounded-lg ' : 'bg-green-400 text-[15px] px-6 py-2 rounded-lg'}`}>
                            <span>{hours.toString().padStart(2, '0')}</span>:
                            <span>{minutes.toString().padStart(2, '0')}</span>:
                            <span>{seconds.toString().padStart(2, '0')}</span>
                        </div>
                        <button onClick={start} className={`${isCollapsed ? 'bg-red-600 text-[15px] px-6 py-2 rounded-lg ml-10' : 'bg-red-600 text-[15px] px-6 py-2 rounded-lg ml-10'}`}>
                            {isRunning ? 'Running' : 'Not running'}
                        </button>
                   </div>

                </div>
                <DataCard />

            </div>
        </>

    )
}

export default TimeTracker



// bg-green-400 text-[15px] px-6 py-2 rounded-md ml-32