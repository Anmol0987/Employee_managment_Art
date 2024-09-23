import React from "react";
import { useRecoilValue } from "recoil";
import { CollapsedAtom } from "../atom/Collapsed";
import SideBar from "../components/SideBar";
// import HomeNavBar2 from "../NavigationBar/HomeNavBar2";
import LeaveTrackerNavBar from "../NavigationBar/LeaveTrackerNavBar";
import { FaCalendarDays } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";



const Holiday = () => {
  const isCollapsed = useRecoilValue(CollapsedAtom);
  return (
    <>
      <SideBar />
      <LeaveTrackerNavBar />
      <div
        className={`${isCollapsed ? "bg-white h-[90vh] w-[95vw] float-end p-16 ": "bg-white  h-[90vh] w-[80%] float-end  px-28  py-14  gap-28"}`}>
         <div className="h-full flex flex-col justify-center items-center">
          <img
            className="h-48 w-48 "
            src="https://static.zohocdn.com/zp5/people5/images/nodata/no_record.b8bf88a48edee681e9dc20e785deb816.svg"
            alt=""
          />
          <p>No Data Found</p>
          <button className=" bg-[#0088FF] py-2 border rounded-md text-white px-5 mt-2 ">Add Holidays</button>
        </div>
      </div>
    </>
  );
};

export default Holiday;
