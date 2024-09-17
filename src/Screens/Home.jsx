import React from 'react'
import { NavBar } from '../components/NavBar'
import { NavBar2 } from '../components/NavBar2'
import { SideBar } from '../components/SideBar'

export const Home = () => {
    return (
        <>
            <SideBar />
            <NavBar />
            <NavBar2 />
        </>
    )
}
