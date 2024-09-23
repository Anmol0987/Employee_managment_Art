
import React from 'react'
import { useRecoilValue } from 'recoil'
import { CollapsedAtom } from '../atom/Collapsed'
import SideBar from '../components/SideBar'
import HomeNavBar2 from '../NavigationBar/HomeNavBar2'
import LeaveTrackerNavBar from '../NavigationBar/LeaveTrackerNavBar'

const LeaveTracker = () => {
    const isCollapsed = useRecoilValue(CollapsedAtom);
  return (
    <>
    <SideBar />
    <LeaveTrackerNavBar  />
    <HomeNavBar2 titles={["LeaveSummary","LeaveBalance","LeaveRequest"]} name={"mydata"} main={"trackLeave"} />
    <div className={`${isCollapsed ? 'bg-slate-300 h-[90vh] w-[95vw] float-end p-16 ' : 'bg-slate-300  h-[90vh] w-[80%] float-end  px-28  py-14  gap-28'}`}>
      <h2>Attendece</h2>
    </div>
  </>
  )
}

export default LeaveTracker