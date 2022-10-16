import React from 'react';
import Navbar from '../components/navbar';
import {Outlet} from 'react-router-dom';
function SharedLayout(props) {
    return (
        <>
        <Navbar />
        <Outlet />
        
        </>
    );
}

export default SharedLayout;