import React from 'react'
import backgroundImage from '../assets/img/Textures/Texture_1.png/'
import SeparationLine from '../Components/SeparationLine/SeparationLine'
import OrderRunning from '../Components/RunningOrder/OrderRunning'



const RunningOrder = () => {
    return (
        <div className='h-full flex items-center justify-center flex-col bg-cover bg-center' style={{ backgroundImage: `url(${backgroundImage})` }}>

            <OrderRunning />

        </div>
    )
}

export default RunningOrder