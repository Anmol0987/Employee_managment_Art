import React from 'react'
import Card from '../components/Card'
import { useRecoilValue } from 'recoil'
import { CollapsedAtom } from '../atom/Collapsed'


export const Dashboard = () => {
    const isCollapsed = useRecoilValue(CollapsedAtom);

    return (

        <div className={`${isCollapsed ? 'bg-slate-300  w-[95vw] float-end p-16 flex flex-wrap gap-16' : 'bg-slate-300 flex-wrap  w-[80%] float-end  px-28  py-14  flex gap-28'}`}>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>

    )
}
