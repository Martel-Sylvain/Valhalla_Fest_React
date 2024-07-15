import React from 'react'
import FacebookIcon from '../../assets/img/Icones/Facebook.svg'
import FacebookIconHovered from '../../assets/img/Icones/FacebookY.svg'
import InstagramIcon from '../../assets/img/Icones/Instagram.svg'
import InstagramIconHovered from '../../assets/img/Icones/InstagramY.svg'
import XIcon from '../../assets/img/Icones/X.svg'
import XIconHovered from '../../assets/img/Icones/XY.svg'
import YoutubeIcon from '../../assets/img/Icones/Youtube.svg'
import YoutubeIconHovered from '../../assets/img/Icones/YoutubeY.svg'



const LateralMenu = () => {

    //tableau icons qui contient chaque icone avec 4 propriétés, une pour l'icone normale, une pour l'icone hovered ainsi que le texte alt et l'url du site concerné.
    const icons = [
        { default: FacebookIcon, hover: FacebookIconHovered, alt: 'Facebook', url: 'https://www.facebook.com' },
        { default: InstagramIcon, hover: InstagramIconHovered, alt: 'Instagram', url: 'https://www.instagram.com' },
        { default: XIcon, hover: XIconHovered, alt: 'Twitter', url: 'https://www.twitter.com' },
        { default: YoutubeIcon, hover: YoutubeIconHovered, alt: 'YouTube', url: 'https://www.youtube.com' }
    ]
    // on effectue une boucle .map dans le tableau icons.
    // key={index} associe une clé unique à chaque élément (c'est du React, pour optimiser le rendu)
    // group sur le parent indique que cette div peut être référencée par ses enfants pour appliquer des styles basés sur les états (hover par ex)
    // group-hover:opacity-0 : signifie que lorsque le parent est survolé, l'image devient transparente
    // group-hover:opacity-100 : signifie que lorsque le parent est survolé, l'image devient visible
    // href={icon.url} target="_blank" pour créer une nouvelle page en cas de click sur le lien
    // rel="noopener noreferrer" : bonne pratique pour des raisons de sécurité lorsque l'on utilise target="_blank" => on empêche en fait la nouvelle page d'avoir accès à window.opener et donc de savoir d'où m'on vient lorque l'on arrive sur celle-ci
    return (
        <div className="fixed flex flex-col md:gap-2 lg:gap-6 right-1 bottom-1 bg-transparent z-20 mx-[1vh] my-[1vh] lg:my-[4vh]">
            {icons.map((icon, index) => (
                <a key={index} href={icon.url} target="_blank" rel="noopener noreferrer" className="relative group w-[2vw] h-[2vh] lg:py-[1vh]">
                    <img className="absolute inset-0 transform group-hover:opacity-0 hover:rotate-[-6deg] hover:scale-150 transition duration-300"
                        src={icon.default} alt={icon.alt} />
                    <img className="absolute inset-0 transform opacity-0 group-hover:opacity-100 hover:rotate-[-6deg] hover:scale-150 transition duration-300"
                        src={icon.hover} alt={`${icon.alt} Hover`} />
                </a>
            ))}
        </div>
    );
}

export default LateralMenu


