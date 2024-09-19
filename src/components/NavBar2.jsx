import React from 'react'
import { useRecoilValue } from 'recoil';
import { CollapsedAtom } from '../atom/Collapsed';
import { Link, NavLink } from 'react-router-dom';
import '../styles/link.css'

const NavBar2 = ({titles}) => {

  const isCollapsed = useRecoilValue(CollapsedAtom);

  return (
    <>
      <div className={`${isCollapsed ? "h-12 w-[95vw] float-end bg-slate-100 px-14 pt-1 " : " h-12 w-[80%] float-end bg-slate-100 px-11 pt-1"}`}>
        <div className='flex justify-start items-center mt-2 gap-4'>
          {titles.map((title, index) => (
            <div key={index} className='text-slate-900'> <NavLink to={`/home/myspace/${title}`} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>{title}</NavLink></div>
          ))}
          {/* <div className='text-slate-900'> <NavLink to="/home/myspace/dashboard"className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>DashBoard</NavLink></div> */}
          {/* <div className='text-slate-900'> <NavLink to="/home/myspace/Calender" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Calender</NavLink></div> */}
        </div>

      </div>
    </>
  )
}

export default NavBar2




// h-12 w-[95vw] float-end bg-slate-100 px-10 pt-1