import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { CollapsedAtom } from '../atom/Collapsed'
import NavBar2 from '../components/NavBar2'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import DataCard from '../components/DataCard'


const TimeTracker = () => {
    const isCollapsed = useRecoilValue(CollapsedAtom);

    const [selectedOption, setSelectedOption] = useState(""); // Initial state is empty

    const handleChange = (e) => {
        setSelectedOption(e.target.value); // Update state when dropdown value changes
    };

    return (
        <>
            <SideBar />
            <NavBar titles={["My Data", "Team"]} />
            <NavBar2 titles={["overview", "dashboard", "calender"]} />
            <div className={`${isCollapsed ? 'bg-slate-300  w-[95vw] float-end p-16 flex flex-wrap gap-10' : 'bg-slate-300 flex-wrap  w-[80%] float-end  px-28  py-14  flex gap-28'}`}>
                <div className='h-16 w-[95vw] rounded-lg bg-white flex items-center justify-start gap-16 px-14'>
                    <label>
                        <select className='border text-[15px] border-slate-300 rounded-md px-3 py-2' id="dropdown" value={selectedOption} onChange={handleChange}>
                            <option value="">Select Project</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </label>
                    <label>
                        <select className='border  text-[15px] border-slate-300 rounded-md px-3 py-2' id="dropdown" value={selectedOption} onChange={handleChange}>
                            <option value="">Select Job</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </label>
                    <label>
                        <input className='border  text-[15px] border-slate-300 rounded-md  pl-2 pr-5 py-2' name='Work' placeholder='what are you working on?' />
                    </label>
                    <div className={`${isCollapsed ? 'bg-green-400 text-[15px] px-6 py-2 rounded-md ml-auto' : 'bg-green-400 text-[15px] px-6 py-2 rounded-md ml-32'}`}>
                        <button>00:00:00</button>
                    </div>

                </div>
                <DataCard/>

            </div>
        </>

    )
}

export default TimeTracker



// bg-green-400 text-[15px] px-6 py-2 rounded-md ml-32