import { Sidebar, MenuItem, Menu } from 'react-pro-sidebar';
import { CiHome } from "react-icons/ci";
import { useRecoilState } from 'recoil';
import { CollapsedAtom } from '../atom/Collapsed';
import { GiHamburgerMenu } from "react-icons/gi";
import { FcLeave } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { CiTimer } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";



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
            }
        } width="20%" collapsedWidth='5%' collapsed={isCollapsed} >
            <div className='flex mb-10  h-14 w-full   justify-center items-center' >
                <Link to='/home/myspace/overview'><GiHamburgerMenu className=' h-6 w-6 text-white' onClick={() => handleToggleSidebar()} /></Link>
            </div>
            <Menu rootStyles={
                { color: 'blue' }
            } >
                <MenuItem className='flex  h-8 w-full   justify-center items-center '><Link to='/home/myspace/overview'> {isCollapsed ? <CiHome /> : <h1>Home</h1>}</Link></MenuItem>
                <MenuItem className='flex  h-8 w-full   justify-center items-center '> <Link to='/leavetracker/mydata/leavesummary'> {isCollapsed ? <FcLeave /> : <h1>Leave Tracker</h1>}</Link></MenuItem>
                <MenuItem className='flex  h-8 w-full   justify-center items-center '> <Link to='/leavetracker/mydata/leavesummary'> {isCollapsed ? <CiTimer /> : <h1>Time Tracker</h1>}</Link></MenuItem>
                <MenuItem className='flex  h-8 w-full   justify-center items-center '> <Link to='/leavetracker/mydata/leavesummary'> {isCollapsed ? <CiCalendarDate /> : <h1>Attendence</h1>}</Link></MenuItem>            </Menu>
        </Sidebar >
    )
}


//