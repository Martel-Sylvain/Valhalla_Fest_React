import React from 'react'
import { NavLink } from 'react-router-dom'


// to pour la destination et children pour le text du bouton (children propriété de React)
const LinkButton = ({ to, children }) => {
    return (

        <NavLink
            to={to}
            className="inline-block px-[5vw] py-[2vw] xl:px-[60px] xl:py-[30px] bg-transparent border border-whiteV rounded-md text-xs md:text-[2vw] font-fontTitle text-whiteV hover:text-yellowV transform hover:rotate-[-2deg] hover:scale-125 transition duration-300 mt-[3vh] lg:mt-[7vh]"
        >
            {children}
        </NavLink >

    );
}

export default LinkButton