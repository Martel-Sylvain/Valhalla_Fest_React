import React from 'react'
import { NavLink } from 'react-router-dom'
import ArteLogo from '../../assets/img/Icones/Arte.svg'
import HeinekenLogo from '../../assets/img/Icones/Heineken.svg'
import LtdLogo from '../../assets/img/Icones/Ltd.svg'
import JacksonLogo from '../../assets/img/Icones/Jackson.svg'
import AfpaLogo from '../../assets/img/Icones/Afpa.svg'
import EmpLogo from '../../assets/img/Icones/Emp.svg'
import SpotifyLogo from '../../assets/img/Icones/Spotify.svg'
import NuclearBlastLogo from '../../assets/img/Icones/NuclearBlast.svg'
import JagermeisterLogo from '../../assets/img/Icones/Jagermeister.svg'


const Footer = () => {
    return (
        <div className='w-full bg-goldVT mt-[3vh] lg:mt-[7vh] border-t-2 border-whiteVT'>
            <div className="container mx-auto px-4 mt-[2vw]">
                <div className="grid grid-flow-col justify-around">
                    {/* Column 1 */}
                    <div>
                        <h2 className="text-center font-fontTitle text-whiteV text-[1vw] font-bold mb-2">Powered By</h2>
                        <div className='grid grid-cols-3 gap-6'>
                            <div className='flex flex-col items-center'>
                                <a href="https://www.arte.tv/fr/arte-concert/" target="_blank" rel="noopener noreferrer" className=""><img className='w-[6vh] my-[1vh]' src={ArteLogo} alt="Arte Concert Logo" /></a>
                                <a href="https://www.heinekenfrance.fr/gate-age/" target="_blank" rel="noopener noreferrer" className=""><img className='w-[6vh] my-[1vh]' src={HeinekenLogo} alt="Heineken Logo" /></a>
                                <a href="https://www.afpa.fr/" target="_blank" rel="noopener noreferrer" className=""><img className='w-[6vh] my-[1vh]' src={AfpaLogo} alt="Afpa Logo" /></a>
                            </div>
                            <div className='flex flex-col items-center'>
                                <a href="https://www.jacksonguitars.com/" target="_blank" rel="noopener noreferrer" className=""><img className='w-[6vh] my-[1vh]' src={JacksonLogo} alt="Jackson Logo" /></a>
                                <a href="https://www.emp-online.fr/" target="_blank" rel="noopener noreferrer" className=""><img className='w-[6vh] my-[1vh]' src={EmpLogo} alt="EMP Logo" /></a>
                                <a href="https://open.spotify.com/" target="_blank" rel="noopener noreferrer" className=""><img className='w-[6vh] my-[1vh]' src={SpotifyLogo} alt="Spotify Logo" /></a>

                            </div>
                            <div className='flex flex-col items-center'>
                                <a href="https://www.espguitars.com/main" target="_blank" rel="noopener noreferrer" className=""><img className='w-[6vh] my-[1vh]' src={LtdLogo} alt="Ltd Guitars Logo" /></a>
                                <a href="https://www.nuclearblast.com/" target="_blank" rel="noopener noreferrer" className=""><img className='w-[6vh] my-[1vh]' src={NuclearBlastLogo} alt="NuclearBlast Logo" /></a>
                                <a href="https://www.jagermeister.com/" target="_blank" rel="noopener noreferrer" className=""><img className='w-[6vh] my-[1vh]' src={JagermeisterLogo} alt="Jagermeister Logo" /></a>

                            </div>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h2 className="font-fontTitle text-whiteV text-[1vw] font-bold mb-2">Let's go to Valhalla</h2>
                        <ul>
                            <li className="font-fontText text-whiteV text-[1vw] mb-1"><NavLink to="/infos" className="hover:underline hover:text-yellowV" activeClassName="font-bold">Infos</NavLink></li>
                            <li className="font-fontText text-whiteV text-[1vw] mb-1"><NavLink to="/lineup" className="hover:underline hover:text-yellowV" activeClassName="font-bold">Line Up</NavLink></li>
                            <li className="font-fontText text-whiteV text-[1vw] mb-1"><NavLink to="/runningorder" className="hover:underline hover:text-yellowV" activeClassName="font-bold">Running Order</NavLink></li>
                            <li className="font-fontText text-whiteV text-[1vw] mb-1"><NavLink to="/tickets" className="hover:underline hover:text-yellowV" activeClassName="font-bold">Tickets</NavLink></li>
                            <li className="font-fontText text-whiteV text-[1vw] mb-1"><NavLink to="/shop" className="hover:underline hover:text-yellowV" activeClassName="font-bold">Shop</NavLink></li>

                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h2 className="font-fontTitle text-whiteV text-[1vw] font-bold mb-2">Stuff</h2>
                        <ul>
                            <li><a href="#" className="hover:underline">Link 1</a></li>
                            <li><a href="#" className="hover:underline">Link 2</a></li>
                            <li><a href="#" className="hover:underline">Link 3</a></li>
                            <li><a href="#" className="hover:underline">Link 4</a></li>
                        </ul>
                    </div>
                </div>
            </div >
            <p className='font-fontText text-whiteV text-[1vw] text-center mt-[1vw]'>COPYRIGHT 2024 VALHALLA FEST FESTIVAL | TOUS DROITS RÉSERVÉS - HEADBANG'EM ALL</p>
        </div >
    )
}

export default Footer