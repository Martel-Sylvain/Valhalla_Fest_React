import React from 'react'
import { bandsLogos } from '../../assets/assets'

const alreadyConfirmedLogos = [
    bandsLogos.Abbath_Logo,
    bandsLogos.Amon_Amarth_Logo,
    bandsLogos.Amorphis_Logo,
    bandsLogos.Blind_Guardian_Logo,
    bandsLogos.Borknagar_Logo,
    bandsLogos.Dark_Funeral_Logo,
    bandsLogos.Eluveitie_Logo,
    bandsLogos.Emperor_Logo,
    bandsLogos.Ensiferum_Logo,
    bandsLogos.Enslaved_Logo,
    bandsLogos.Equilibrium_Logo,
    bandsLogos.Finntroll_Logo,
    bandsLogos.In_Flames_Logo,
    bandsLogos.Insomnium_Logo,
    bandsLogos.Omnium_Gatherum_Logo,
    bandsLogos.Opeth_Logo,
    bandsLogos.Primordial_Logo,
    bandsLogos.Taake_Logo,
    bandsLogos.Tyr_Logo,
    bandsLogos.Watain_Logo,
]

//fonction fléchée, pas d'argument en entrée
const AlreadyConfirmed = () => {
    return (
        <div className='w-[75vw] mt-[3vh] lg:mt-[7vh]'>
            <h2 className='font-fontTitle text-whiteV text-[4vw] text-center'>Already confirmed :</h2>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12 mt-[2vh] lg:mt-[5vh]'>
                {/* méthode map utilisée pour parcourir le tableau "alreadyConfirmedLogos".
                pour chaque logo du tableau, on créé une div avec une key unique, ici l'index (requis par React pour identifier les éléments de la liste)
                src donne la source de l'image
                `Logo ${index + 1}` permet d'obtenir le texte alternatif */}
                {alreadyConfirmedLogos.map((logo, index) => (
                    <div key={index} className='flex justify-center items-center'>
                        <img src={logo} alt={`Logo ${index + 1}`} className='w-[vh] h-auto' />
                    </div>

                ))}
            </div>
        </div>
    )
}

export default AlreadyConfirmed