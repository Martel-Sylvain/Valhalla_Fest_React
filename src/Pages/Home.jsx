import React from 'react'
import backgroundImage from '../assets/img/Textures/Texture_1.jpg/'
import mainFestivalImage from '../assets/img/Festival_Logos/Main_Logo_1.png/'
import GlitchEffect from '../Components/GlitchEffect/GlitchEffect'


const Home = () => {
    return (
        <div className='relative min-h-screen bg-cover bg-center' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='absolute inset-0 bg-black opacity-75 z-0'></div>
            <div className='relative z-10 flex justify-center items-center h-full'>
                <div className='relative mt-20 m-10 max-w-[35vw] max-h-[25vh]'>
                    <div className='relative w-full h-auto'>
                        <img className='w-full h-auto object-contain' src={mainFestivalImage} alt="Valhalla Festival Logo" />
                        <div className='absolute bottom-[5%] right-[2%] transform translate-y-[50%]'>
                            <GlitchEffect text='2025' />
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Home

