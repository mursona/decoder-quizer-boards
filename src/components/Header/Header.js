import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import logo from '../../logo/logo.png';
import Link from '../Link/Link';

const Header = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', path: '/home' },
        { id: 2, name: 'Topics', path: '/topics' },
        { id: 3, name: 'Statistics', path: '/statistics' },
        { id: 4, name: 'Blog', path: '/blog' },
    ]
    return (
        <div>
            <nav className='bg-purple-100 w-full relative flex mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 align-middle justify-between'>

            <div onClick={() => setOpen(!open)} className="h-6 w-6 ml-4 my-8 md:hidden">
             {
                        open ? <XMarkIcon /> : <Bars3Icon />
             }
            </div>

                <div className='relative flex items-center lg:ml-2 sm:mr-4 py-4'>
                <img src={logo} alt="" />
                <p className='text-blue-300 font-bold text-3xl'>DECODER</p>
                </div>
                <ul className={`md:flex w-full justify-end absolute md:static duration-500 ease-in ${open ? 'top-1 ml-10' : 'top-[-280px]'}`}>
                
                    {
                        routes.map(route => <Link key={route.id} route={route}></Link>)
                    }
                </ul>
                </nav>
        </div>
);
};
export default Header;