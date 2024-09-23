import React from "react";
import { useRecoilValue } from "recoil";
import { CollapsedAtom } from "../atom/Collapsed";
import SideBar from "../components/SideBar";
// import HomeNavBar2 from "../NavigationBar/HomeNavBar2";
import LeaveTrackerNavBar from "../NavigationBar/LeaveTrackerNavBar";



const Holiday = () => {
  const isCollapsed = useRecoilValue(CollapsedAtom);
  return (
    <>
      <SideBar />
      <LeaveTrackerNavBar />
      <div
        className={`${isCollapsed ? "bg-slate-300 h-[90vh] w-[95vw] float-end p-16 ": "bg-slate-300  h-[90vh] w-[80%] float-end  px-28  py-14  gap-28"}`}>
          <div>
            <div className=""></div>
            <div></div>
          </div>
      </div>
    </>
  );
};

export default Holiday;
