//composant qui nous permet d'exclure la Navbar de la page NotFound dans App.jsx
//ON PEUT S'EN SERVIR POUR INCLURE UN FOOTER PAR EX

import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'

//ce composant utilise useLocation pour vérifier le chemin actuel et décider si la Navbar doit être affichée
//useLocation est un Hook de react-rooter-dom qui permet d'accéder à l'objet location représentant l'url actuelle
//on utilise la propr children dans cette fonction
const MainLayout = ({ children }) => {
    const location = useLocation(); //useLocation permet d'obtenir l'objet location qui contient les informations de l'URL actuelle
    const shouldShowNavbar = location.pathname !== "/notfound"; //la propriété pathname nous obtient le "chemin" de l'URL actuelle, on créé une variable shoulShowNavbar qui nous permet de vérifier si l'URL actuelle est différente de "/notfound", si oui la variable sera true.

    return (
        <>
            {/* affiche le composant Navbar seulement si shouldShowNavbar est true */}
            {shouldShowNavbar && <Navbar />}
            {/* rendra les élément encapsulés dans MainLayout (dans ce cas les pages sauf NotFound) */}
            {children}
        </>
    );
};

export default MainLayout;