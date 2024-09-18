import React from 'react'
import Card from '../components/Card'
import { useRecoilValue } from 'recoil'
import { CollapsedAtom } from '../atom/Collapsed'


export const Dashboard = () => {
    const isCollapsed = useRecoilValue(CollapsedAtom);

    return (

<<<<<<< HEAD
        <div className={`${isCollapsed?'bg-slate-300  w-[95vw] float-end p-16 flex flex-wrap gap-16':'bg-slate-300 flex-wrap  w-[80%] float-end  p-10  flex gap-14'}`}>
            <Card />           
=======
        <div className={`${isCollapsed ? 'bg-slate-300  w-[95vw] float-end p-16 flex flex-wrap gap-16' : 'bg-slate-300 flex-wrap  w-[80%] float-end  p-10  flex gap-14'}`}>
            <Card />
            <Card />
            <Card />
            <Card />
>>>>>>> 466223e6a9f844bf84e6a4cac945c5b62a02bc79
        </div>

    )
}
