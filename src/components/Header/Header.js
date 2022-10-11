import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    
    const [open, setOpen] = useState(false);

    let activeStyle = {
        backgroundColor: "#17aaee",
        margin: "40px",
        padding: "5px",
        borderRadius: "5px",
        color: "white"
      };
    let unactiveStyle = {
        margin: "40px",
      };
    return (
        <div>
            <nav className='bg-purple-100 w-full relative flex mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 align-middle justify-between'>

            <div onClick={() => setOpen(!open)} className="text-sky-500 h-6 w-8 ml-4 my-8 md:hidden">
             {
                        open ? <XMarkIcon /> : <Bars3Icon />
             }
            </div>

                <div className='relative flex items-center lg:ml-2 sm:mr-4 py-4'>
                <img src={logo} alt="" />
                <p className='text-blue-300 font-bold text-3xl'>DECODER</p>
                </div>
                <nav className={`md:flex w-full justify-end absolute font-semibold text-lg text-sky-500 md:static duration-500 ease-in ${open ? 'bg-purple-50 top-24' : 'top-[-280px]'}`}>

                    <NavLink to="/home" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>Home</NavLink>
                    <NavLink to="/statistics" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>Statistics</NavLink>
                    <NavLink to="/blog" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>Blog</NavLink>
                </nav>
                </nav>
                
        </div>
);
};
export default Header;