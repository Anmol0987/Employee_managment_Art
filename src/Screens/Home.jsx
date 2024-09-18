import React from 'react'
import { useRecoilValue } from 'recoil'
import { CollapsedAtom } from '../atom/Collapsed'


export const Home = () => {
    const isCollapsed = useRecoilValue(CollapsedAtom);

    return (
        <>
        <h2 className={`${isCollapsed?' bg-slate-300 h-[100vh] w-[95%] float-end  px-10 pt-1':' bg-slate-300 h-[100vh] w-[80%] float-end  px-10 pt-1'}`}>Home</h2>
        </>
    )
}


