import React from 'react'
import { useRecoilValue } from 'recoil'
import { CollapsedAtom } from '../atom/Collapsed'
import NavBar2 from '../components/NavBar2'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'

const TimeTracker = () => {
    const isCollapsed = useRecoilValue(CollapsedAtom);

    return (
        <>  
        <SideBar />
        <NavBar titles={["My Data", "Team"]} />
        <NavBar2 titles={["overview", "dashboard", "calender"]} />
        <div className={`${isCollapsed ? 'bg-slate-300  w-[95vw] float-end p-16 flex flex-wrap gap-10' : 'bg-slate-300 flex-wrap  w-[80%] float-end  px-28  py-14  flex gap-28'}`}>
            <div className='h-16 w-[95vw] rounded-lg bg-white flex items-center justify-evenly'>
                <label>
                    <input className='border border-slate-300 rounded-md px-4 py-2' name='Project' placeholder='Select Project'/>
                </label>
                <label>
                    <input className='border border-slate-300 rounded-md px-4 py-2' name='Job' placeholder='Select job'/>
                </label>
                <label>
                    <input className='border border-slate-300 rounded-md px-4 py-2' name='Work' placeholder='what are you working on'/>
                </label>
                <label>
                    <input className='border border-slate-300 rounded-md px-4 py-2' name='Project' placeholder='Select Project'/>
                </label>
            </div>     

        </div>
        </>

    )
}

export default TimeTracker