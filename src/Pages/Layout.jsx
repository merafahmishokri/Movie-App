import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>      
            {localStorage.getItem("email")&&<NavBar></NavBar>}          
            <Outlet></Outlet>
        </div>
    );
}

export default Layout;
