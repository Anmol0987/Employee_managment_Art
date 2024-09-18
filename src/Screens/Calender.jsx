import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { CollapsedAtom } from '../atom/Collapsed'
import Calendar from 'react-calendar'
import '../styles/Calender.css';


const Calender = () => {
    const isCollapsed = useRecoilValue(CollapsedAtom);

    const [value, onChange] = useState(new Date());

  return (
    <div className={`${isCollapsed ? 'bg-slate-300 h-[95vh] w-[95vw] float-end p-16 ' : 'bg-slate-300  h-[95vh] w-[80%] float-end  px-28  py-14  gap-28'}`}>
            <Calendar onChange={onChange} value={value} />
    </div>

  )
}

export default Calender