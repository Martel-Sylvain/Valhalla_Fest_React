import React from 'react'
import backgroundImage from '../assets/img/Textures/Texture_1.png/'
import Carousel from '../Components/Carousel/Carousel'





const LineUp = () => {
    return (

        <body className='min-h-screen flex items-center justify-center flex-col bg-cover bg-center' style={{ backgroundImage: `url(${backgroundImage})` }}>

            <Carousel />

        </body>
    )
}

export default LineUp