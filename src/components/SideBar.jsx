import { Sidebar, MenuItem, Menu } from 'react-pro-sidebar';
import { useState } from 'react';
import { CiHome } from "react-icons/ci";
import { useRecoilState } from 'recoil';
import { CollapsedAtom } from '../atom/Collapsed';


export default function SideBar() {
    const [isCollapsed,setIsCollapsed] = useRecoilState(CollapsedAtom);

    const handleToggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };
    return (

        <Sidebar backgroundColor="#151632" rootStyles={
            {
                height: '100vh',
                position: 'fixed',
                top: '0',
                left: '0',
            }
        } width="20%" collapsedWidth='5%' collapsed={isCollapsed} >
            <button style={{ width: '100%', height: "3.5rem", backgroundColor: 'white', alignItems: "center" }} onClick={() => handleToggleSidebar()}>Open sidebar</button>
            <Menu rootStyles={{
                color: 'white',
            }} >
                <MenuItem> <CiHome /></MenuItem>
                <MenuItem> Calendar</MenuItem>
                <MenuItem > E-commerce</MenuItem>

                <MenuItem> Calendar</MenuItem>
                <MenuItem > E-commerce</MenuItem>

                <MenuItem> Calendar</MenuItem>
                <MenuItem > E-commerce</MenuItem>
            </Menu>
        </Sidebar >
    )
}
