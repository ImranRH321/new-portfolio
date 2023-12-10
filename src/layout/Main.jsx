import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/Home/NavBar/NavBar';

const Main = () => {
    return (
        <div>
             <NavBar></NavBar>
            <Outlet></Outlet>
            <h1>footer page </h1>
        </div>
    );
};

export default Main;