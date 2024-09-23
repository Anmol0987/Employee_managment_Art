import React from "react";
import { useRecoilValue } from "recoil";
import { CollapsedAtom } from "../atom/Collapsed";
import SideBar from "../components/SideBar";
import HomeNavBar from "../NavigationBar/HomeNavBar";
import HomeNavBar2 from "../NavigationBar/HomeNavBar2";
import LeaveTrackerNavBar from "../NavigationBar/LeaveTrackerNavBar";
import DataCard from "../components/DataCard";

const Attendence = () => {
  const isCollapsed = useRecoilValue(CollapsedAtom);
  return (
    <>
      <SideBar />
      <LeaveTrackerNavBar />
      <HomeNavBar2
        titles={["Leave Summary", "Leave Balance", "Leave Request"]}
        name={"mydata"}
        main={"trackLeave"}
      />
      <div
        className={`${
          isCollapsed
            ? " h-[90vh] w-[95vw] float-end p-16 "
            : "  h-[90vh] w-[80%] float-end  px-28  py-14  gap-28"
        }`}
      >
        <div className="flex flex-col justify-center items-center">
          <img
            className="h-48 w-48 "
            src="https://static.zohocdn.com/zp5/people5/images/nodata/no_checkin_configured.369421169f7c33538eb2afb3a9788e81.svg"
            alt=""
          />
          <p className="text-center">
            Update the Date of Joining for this employee to display their leave
            information <br /> and enable them to perform leave related actions.
          </p>
        </div>
      </div>
    </>
  );
};

export default Attendence;
