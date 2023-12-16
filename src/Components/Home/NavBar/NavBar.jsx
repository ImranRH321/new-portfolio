import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const navLinks = <>
        <li><Link to='/' className='capitalize my-1 font-bold mx-2 '>Home</Link></li>
        <li><Link to='/skills' className='capitalize my-1 font-bold mx-2 '>Skills</Link></li>
        <li><Link to='/projects' className='capitalize my-1 font-bold mx-2 '>Projects</Link></li>
        <li><Link to='/conact' className='capitalize my-1 font-bold mx-2' >Conact Me</Link></li>
    </>

        // sob ses navbar botttom set kormu 

    return (
        <div className="navbar  bottom-0 left-0 right-0 fixed z-10  text-black border shadow-lg  border-l-2">
        {/* <div className="navbar    text-black border shadow-lg  border-l-2"> */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm -mt-60 dropdown-content  z-[1] p-2 shadow bg-base-200 rounded-box w-[300px]">
                        {navLinks}
                    </ul>
                </div >
                <div className='m'>
                    <h1 className='text-1xl  font-sensf lg:text-5xl'>IMRaN Boss</h1>
                    {/* <Marquee>
                        <h1 className='text-5xl'>Hi,</h1>
                        <a className="btn btn-ghost text-xl">MD.Sagor beby developer tenlon lenaka nei tenson deka</a>
                    </Marquee> */}
                </div>
            </div>
            <div className="navbar-end hidden lg:flex me-5">
                <ul className="menu menu-horizontal px-1 ">
                    {/* lg dv */}
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;  