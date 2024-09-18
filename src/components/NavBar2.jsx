import React from 'react'
import { useRecoilValue } from 'recoil';
import { CollapsedAtom } from '../atom/Collapsed';
import { Link } from 'react-router-dom';

const NavBar2 = () => {

  const isCollapsed = useRecoilValue(CollapsedAtom);

  return (
    <>
    <div className={`${isCollapsed  ? "h-12 w-[95vw] float-end bg-slate-100 px-14 pt-1" : "h-12 w-[80%] float-end bg-slate-100 px-11 pt-1"}` }>
        <div className='flex justify-start items-center mt-2 gap-4'>
        <h2 className='text-slate-900'>Overview</h2>
        <div className='text-slate-900'><Link  to='/home/myspace/dashboard'>Dashboard</Link></div>
        <h2 className='text-slate-900'>Calender</h2>
        </div>

    </div>
    </>
  )
}

export default NavBar2




// h-12 w-[95vw] float-end bg-slate-100 px-10 pt-1