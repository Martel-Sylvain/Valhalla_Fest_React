import React from 'react'
import backgroundImage from '../assets/img/Textures/Texture_1.jpg/'
import mainFestivalImage from '../assets/img/Festival_Logos/Main_Logo_1.png/'
import GlitchEffect from '../Components/GlitchEffect/GlitchEffect'
import Countdown from '../Components/Countdown/Countdown';
import SeparationLine from '../Components/SeparationLine/SeparationLine';
import Video from '../Components/Video/Video';

const Home = () => {
    return (
        <div className='relative min-h-screen bg-cover bg-center' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='absolute inset-0 bg-black opacity-75 z-0'></div>
            <div className='relative flex flex-col justify-center items-center h-full'>
                {/* MAIN IMAGE */}
                <div className='relative mt-20 mx-10 max-w-[45vw] max-h-[100vh]'>
                    <div className='relative w-full h-auto'>
                        <img className='w-full h-auto object-contain' src={mainFestivalImage} alt="Valhalla Festival Logo" />
                        <div className='absolute -bottom-[5%] right-[2%]'>
                            <GlitchEffect text='2025' />
                        </div>
                    </div>
                </div>

                {/* COUNTDOWN */}
                <div className='relative'>
                    <Countdown />
                </div>

                <SeparationLine />

                {/* VIDEO */}
                <Video />

                <SeparationLine />

            </div>
        </div>
    );
};

export default Home;

