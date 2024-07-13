// Composant qui sert à exclure la Navbar de la page NotFound

import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Layout = () => {
    const location = useLocation();
    const hideNavbarOnPaths = ['/notfound']; // Liste des chemins où la Navbar ne doit pas apparaître
    const shouldShowNavbar = !hideNavbarOnPaths.includes(location.pathname);

    return (
        <>
            {shouldShowNavbar && <Navbar />}
            <Outlet />
        </>
    );
};

export default Layout;