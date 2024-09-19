import { Sidebar, MenuItem, Menu } from 'react-pro-sidebar';
import { CiHome } from "react-icons/ci";
import { useRecoilState } from 'recoil';
import { CollapsedAtom } from '../atom/Collapsed';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineTimeToLeave } from "react-icons/md";
import { Link } from 'react-router-dom';
import { CiTimer } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";

const menuButtonStyle = {
    backgroundColor: "#151632"
};

export default function SideBar() {
    const [isCollapsed, setIsCollapsed] = useRecoilState(CollapsedAtom);

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
                cursor: 'pointer',
                transition: 'all 0.05s ease',
            }
        } width="20%" collapsedWidth='5%' collapsed={isCollapsed} >
            <div className='flex mb-10  h-20 w-full   justify-center items-center' >
                <h2>{isCollapsed ? <GiHamburgerMenu className=' h-6 w-6 text-white' onClick={() => handleToggleSidebar()} /> : <IoMdClose className=' h-6 w-6 text-white' onClick={() => handleToggleSidebar()} />} </h2>
            </div>
            <Menu rootStyles={{
                background: '#151632',
                ":hover": {
                    background: '#151632',
                },

            }} >
                <a className={`flex p-10  h-8 w-full text-white  hover:text-blue-400  ${isCollapsed ? "justify-center" : "justify-start"} items-center `}> <Link to='/home/myspace/overview'> {isCollapsed ? <CiHome className='text-2xl' /> : <div className='  flex gap-2 justify-center items-center '>  <CiHome className='text-2xl' /><  h1 className='text-2xl' >Home</h1></div>}</Link></a>
                <a className={`flex p-10  h-8 w-full text-white  hover:text-blue-400  ${isCollapsed ? "justify-center" : "justify-start"} items-center`} > <Link to='/timetracker/mydata/timelogs'> {isCollapsed ? <CiTimer className='text-2xl' /> : <div className='flex gap-2 justify-center items-center'>  <CiTimer className='text-2xl' /><  h1 className='text-2xl' >Time Tracker</h1></div>}</Link></a>
                <a className={`flex p-10  h-8 w-full text-white  hover:text-blue-400  ${isCollapsed ? "justify-center" : "justify-start"} items-center`} > <Link to='/attendence'> {isCollapsed ? <CiCalendarDate className='text-2xl' /> : <div className='flex gap-2 justify-center items-center'>  <CiCalendarDate className='text-2xl' /><  h1 className='text-2xl' >Attendence</h1></div>}</Link></a>
                <a className={`flex p-10  h-8 w-full text-white  hover:text-blue-400  ${isCollapsed ? "justify-center" : "justify-start"} items-center`} > <Link to='/trackLeave'> {isCollapsed ? <MdOutlineTimeToLeave className='text-2xl' /> : <div className='flex gap-2 justify-center items-center'>  <MdOutlineTimeToLeave className='text-2xl' /><  h1 className='text-2xl' >Leave Tracker</h1></div>}</Link></a>
            </Menu>

        </Sidebar >
    )
}


//