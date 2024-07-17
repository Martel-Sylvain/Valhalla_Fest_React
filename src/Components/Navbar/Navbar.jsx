import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import homeLogo from '../../assets/img/Festival_Logos/Home_Logo.png';
import homeLogoActive from '../../assets/img/Festival_Logos/Home_Logo_Active.png';
import hamburger from '../../assets/img/Icones/Hamburger.svg';
import hamburgerHovered from '../../assets/img/Icones/HamburgerY.svg';
import cross from '../../assets/img/Icones/Cross.svg';
import crossHovered from '../../assets/img/Icones/CrossY.svg';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isHoveredHome, setIsHoveredHome] = useState(false);
    const [isHoveredHamburger, setIsHoveredHamburger] = useState(false);

    const getActiveLinkColor = (isActive) => `${isActive ? "text-yellowV" : "text-whiteV"} text-base lg:text-xl xl:text-2xl font-fontTitle drop-shadow-custom hover:text-yellowV transform hover:rotate-[-2deg] hover:scale-125 transition duration-300 py-2 md:py-0`;
    const getActiveLogo = (isActive, isHoveredHome) => (isActive || isHoveredHome) ? homeLogoActive : homeLogo;
    const getHamburgerIcon = (isHoveredHamburger) => isHoveredHamburger ? hamburgerHovered : hamburger;
    const getCrossIcon = (isHoveredHamburger) => isHoveredHamburger ? crossHovered : cross;

    return (
        <nav className='fixed top-0 w-full flex justify-between items-center bg-goldVt z-50 border-b-2 border-whiteVt'>
            <div className={`${showMenu ? "flex" : "hidden"} flex-col items-center w-full absolute top-full bg-goldVt py-2 md:flex md:relative md:flex-row md:pb-2 md:justify-around`}>
                <NavLink to="/" className="w-20">
                    {({ isActive }) => (
                        <img
                            className='w-20 transform hover:scale-125 transition duration-300'
                            src={getActiveLogo(isActive, isHoveredHome)}
                            alt="Home Logo"
                            onMouseEnter={() => setIsHoveredHome(true)}
                            onMouseLeave={() => setIsHoveredHome(false)}
                        />
                    )}
                </NavLink>
                <NavLink to="/lineup" className={({ isActive }) => getActiveLinkColor(isActive)}>
                    Line Up
                </NavLink>
                <NavLink to="/runningorder" className={({ isActive }) => getActiveLinkColor(isActive)}>
                    Running Order
                </NavLink>
                <NavLink to="/tickets" className={({ isActive }) => getActiveLinkColor(isActive)}>
                    Tickets
                </NavLink>
                <NavLink to="/infos" className={({ isActive }) => getActiveLinkColor(isActive)}>
                    Infos
                </NavLink>
                <NavLink to="/shop" className={({ isActive }) => getActiveLinkColor(isActive)}>
                    Shop
                </NavLink>
            </div>
            <button onClick={() => setShowMenu(!showMenu)} className='ml-auto md:hidden' onMouseEnter={() => setIsHoveredHamburger(true)}
                onMouseLeave={() => setIsHoveredHamburger(false)} >
                <img className='w-10 sm:w-12 p-2' src={showMenu ? getCrossIcon(isHoveredHamburger) : getHamburgerIcon(isHoveredHamburger)} alt={showMenu ? "Hide Menu" : "Show Menu"} />
            </button>
        </nav>
    );
}

export default Navbar;

