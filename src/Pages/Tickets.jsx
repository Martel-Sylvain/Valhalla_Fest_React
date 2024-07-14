import React from 'react'
import backgroundImage from '../assets/img/Textures/Texture_1.png/'
import SeparationLine from '../Components/SeparationLine/SeparationLine'


const Tickets = () => {
    return (
        <div className='h-full flex items-center justify-center flex-col bg-cover bg-center' style={{ backgroundImage: `url(${backgroundImage})` }}>

            <div className='w-[100wh] h-[100vh] flex flex-col items-center justify-center'>
                <SeparationLine />
                <h1 className='font-fontTitle text-whiteV text-[4vw] text-center mt-[3vh]'>Tickets page...Under Construction</h1>
                <SeparationLine />
            </div>
        </div>
    )
}

export default Tickets