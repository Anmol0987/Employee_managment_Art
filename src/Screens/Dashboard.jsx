import React from 'react'
import  Card  from '../components/Card'

const dashboardStyle = 'bg-slate-300 h-[100vh] w-[80%] float-end  px-10 pt-1'

export const Dashboard = () => {
    return (

        <div className={dashboardStyle}>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>

    )
}
