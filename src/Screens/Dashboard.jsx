import React from 'react'
import Card from '../components/Card'
import { useRecoilValue } from 'recoil'
import { CollapsedAtom } from '../atom/Collapsed'
import BirthdayCard from '../components/BirthdayCard'
import UpcomingCard from '../components/UpcomingCard'
import NavBar2 from '../components/NavBar2'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'



export const Dashboard = () => {
    const isCollapsed = useRecoilValue(CollapsedAtom);

    return (
        <>

            <SideBar />
            <NavBar titles={["Myspace", "Organization", "Team"]} />
            <NavBar2 titles={["Overview", "Dashboard", "Calender"]} />

            <div className={`${isCollapsed ? 'bg-slate-300  w-[95vw] float-end p-16 flex flex-wrap gap-10' : 'bg-slate-300 flex-wrap  w-[80%] float-end  px-28  py-14  flex gap-28'}`}>
                <Card title={"Employees"} />
                <BirthdayCard />
                <UpcomingCard />
                <UpcomingCard />

            </div>
        </>

    )
}
