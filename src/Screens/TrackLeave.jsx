import React from 'react'
import { useRecoilValue } from 'recoil'
import { CollapsedAtom } from '../atom/Collapsed'
import NavBar2 from '../components/NavBar2'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'

const TrackLeave = () => {
    const isCollapsed = useRecoilValue(CollapsedAtom);
  return (
    <>
      <SideBar />
      <NavBar titles={["Myspace", "Organization", "Team"]} />
      <NavBar2 titles={["Overview", "Dashboard", "Calender"]} />
      <div className={`${isCollapsed ? 'bg-slate-300 h-[95vh] w-[95vw] float-end p-16 ' : 'bg-slate-300  h-[95vh] w-[80%] float-end  px-28  py-14  gap-28'}`}>
            <h2>Track leave</h2>
      </div>
    </>
  )
}

export default TrackLeave