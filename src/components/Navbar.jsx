import React from 'react';
import { SiAirchina, SiConsul } from 'react-icons/si';
import { CgMenuGridO } from 'react-icons/cg';
import { FiHelpCircle } from 'react-icons/fi';
import Link from 'next/link';
const Navbar = () => {
    const NavItems = <>
        <li className='text-2xl font-semibold'>Home</li>
        <li className='text-2xl font-semibold'>About</li>
        <li className='text-2xl font-semibold'>Offers</li>
        <li className='text-2xl font-semibold'>Seat</li>
        <li className='text-2xl font-semibold'>Destination</li>
    </>
    return (
        <div>
            <div className='flex justify-between items-center w-2/4  mx-auto gap-5'>
                <div className='flex gap-5 text-xl font-semibold'>
                    <Link className='flex gap-2 items-center' href="/"><SiConsul className='text-3xl'/> <span className='max-sm:hidden'>Support</span></Link>
                    <Link className='flex gap-2 items-center' href="/"><FiHelpCircle className='text-3xl'/> <span className='max-sm:hidden'>Help</span></Link>
                </div>
               <div className='flex'>
               <button className='btn bg-white'>Sign In</button>
                <button className='btn bg-white'>Sign Up</button>
               </div>
            </div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    
                    <a className="btn btn-ghost normal-case text-xl"><SiAirchina className='text-6xl'/></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {NavItems}
                    </ul>
                </div>
                <div className="navbar-end">
                <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <CgMenuGridO className='text-4xl'/>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavItems}
                        </ul>
                    </div>
                    <button className='max-md:hidden btn bg-blue-500 rounded-3xl'>Contact</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;