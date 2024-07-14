import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='w-full bg-goldVT mt-[3vh] lg:mt-[7vh] border-t-2 border-whiteVT'>
            <div className="container mx-auto px-4 mt-[2vw]">
                <div className="grid grid-flow-col justify-around">
                    {/* Column 1 */}
                    <div>
                        <h2 className="font-fontTitle text-whiteV text-[1vw] font-bold mb-2">Powered By</h2>
                        <ul>
                            <li className="font-fontText text-whiteV text-[1vw] mb-1"><a href="https://www.example.com" className="hover:underline" target="_blank" rel="noopener noreferrer">Example</a></li>
                            <li className="font-fontText text-whiteV text-[1vw] mb-1"><a href="https://www.example.com" className="hover:underline" target="_blank" rel="noopener noreferrer">Example</a></li>
                            <li className="font-fontText text-whiteV text-[1vw] mb-1"><a href="https://www.example.com" className="hover:underline" target="_blank" rel="noopener noreferrer">Example</a></li>
                            <li className="font-fontText text-whiteV text-[1vw] mb-1"><a href="https://www.example.com" className="hover:underline" target="_blank" rel="noopener noreferrer">Example</a></li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h2 className="font-fontTitle text-whiteV text-[1vw] font-bold mb-2">Let's go to Valhalla</h2>
                        <ul>
                            <li className="font-fontText text-whiteV text-[1vw] mb-1"><NavLink to="/infos" className="hover:underline" activeClassName="font-bold">Infos</NavLink></li>
                            <li className="font-fontText text-whiteV text-[1vw] mb-1"><NavLink to="/lineup" className="hover:underline" activeClassName="font-bold">Line Up</NavLink></li>
                            <li className="font-fontText text-whiteV text-[1vw] mb-1"><NavLink to="/runningorder" className="hover:underline" activeClassName="font-bold">Running Order</NavLink></li>
                            <li className="font-fontText text-whiteV text-[1vw] mb-1"><NavLink to="/tickets" className="hover:underline" activeClassName="font-bold">Tickets</NavLink></li>
                            <li className="font-fontText text-whiteV text-[1vw] mb-1"><NavLink to="/shop" className="hover:underline" activeClassName="font-bold">Shop</NavLink></li>

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