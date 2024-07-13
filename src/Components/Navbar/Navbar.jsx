import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import homeLogo from '../../assets/img/Festival_Logos/Home_Logo.png'
import homeLogoActive from '../../assets/img/Festival_Logos/Home_Logo_Active.png'
import hamburger from '../../assets/img/Icones/Hamburger.svg'
import hamburgerHovered from '../../assets/img/Icones/HamburgerY.svg'
import cross from '../../assets/img/Icones/Cross.svg'
import crossHovered from '../../assets/img/Icones/CrossY.svg'




const Navbar = () => {
    // useState
    const [showMenu, setShowMenu] = useState(false);
    const [isHoveredHome, setIsHoveredHome] = useState(false);
    const [isHoveredHamburger, setIsHoveredHamburger] = useState(false);

    // Active Menu
    const getActiveLinkColor = (isActive) => `${isActive ? "text-yellowV" : "text-whiteV"} text-lg font-coprgtb hover:text-yellowV transform hover:rotate-[-2deg] hover:scale-125 transition duration-300 py-2 sm:py-0`;
    // Active/Hovered Logo Home 
    const getActiveLogo = (isActive, isHoveredHome) => isActive || isHoveredHome ? homeLogoActive : homeLogo;
    // Hovered Hamburger
    const getHamburgerIcon = (isHoveredHamburger) =>
        isHoveredHamburger ? hamburgerHovered : hamburger;
    // Hovered Cross
    const getCrossIcon = (isHoveredHamburger) =>
        isHoveredHamburger ? crossHovered : cross;

    return (
        <nav className='fixed top-0 w-full p-2 flex justify-between items-center bg-goldV z-50'>
            <div className={`${showMenu ? "flex" : "hidden"} flex-col items-center bg-goldV w-full absolute top-full pb-5 sm:flex sm:relative sm:flex-row sm:pb-0 sm:justify-around`}>
                <NavLink to="/" className="w-20">
                    {({ isActive }) => (
                        <img className='w-20 transform hover:scale-125 transition duration-300' src={getActiveLogo(isActive, isHoveredHome)} alt="Home Logo" onMouseEnter={() => setIsHoveredHome(true)} onMouseLeave={() => setIsHoveredHome(false)} />
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
            <button onClick={() => setShowMenu(!showMenu)} className='ml-auto sm:hidden' onMouseEnter={() => setIsHoveredHamburger(true)}
                onMouseLeave={() => setIsHoveredHamburger(false)} >
                <img className='w-12' src={showMenu ? getCrossIcon(isHoveredHamburger) : getHamburgerIcon(isHoveredHamburger)} alt={showMenu ? "Hide Menu" : "Show Menu"} />
            </button>
        </nav >

    )
}

export default Navbar