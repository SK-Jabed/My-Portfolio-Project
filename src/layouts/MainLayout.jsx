import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
// import NavbarComponent from '../components/Navbar';
// import Navbar from '../components/NavigationBar';
// import NavigationBar from '../components/NavigationBar';

const MainLayout = () => {
    return (
        <div className='w-full bg-black'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;