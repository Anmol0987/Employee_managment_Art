import { Sidebar, MenuItem, Menu } from 'react-pro-sidebar';
import { CiHome } from "react-icons/ci";
import { useRecoilState } from 'recoil';
import { CollapsedAtom } from '../atom/Collapsed';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';



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
            <Link  to='/home/myspace/overview'><GiHamburgerMenu className=' h-6 w-6 text-white' onClick={() => handleToggleSidebar()} /></Link>
            </div>
            <Menu rootStyles={
               {color:'blue'}
            } >
                <MenuItem className='flex  h-8 w-full   justify-center items-center '><Link  to='/home/myspace/overview'> < CiHome className='h-6 w-6 text-white' /></Link></MenuItem>
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
