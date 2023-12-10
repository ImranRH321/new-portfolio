import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const navLinks = <>
        <li><Link to='/' className='uppercase text-yellow-300'>Home</Link></li>
        <li><Link to='/' className='uppercase text-yellow-300'>About me</Link></li>
        <li><Link to='/' className='uppercase text-yellow-300'>blogs</Link></li>
        <li><Link to='/' className='uppercase text-yellow-300'>conact</Link></li>
    </>


    return (
        <div className="navbar bg-neutral-700 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Pata</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {/* lg dv */}
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;