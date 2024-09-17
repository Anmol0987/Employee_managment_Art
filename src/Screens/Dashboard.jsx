import React from 'react'
import  Card  from '../components/Card'

const dashboardStyle = 'bg-slate-300 h-screen w-[95vw] float-end  px-10 pt-1 flex gap-10'

export const Dashboard = () => {
    return (

        <div className={dashboardStyle}>
            <Card />
            <Card/>            
        </div>

    )
}
