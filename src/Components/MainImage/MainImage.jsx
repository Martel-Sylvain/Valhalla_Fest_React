import React from 'react'
import mainFestivalImage from '../../assets/img/Festival_Logos/Main_Logo_1.png'
import GlitchEffect from '../GlitchEffect/GlitchEffect'

const MainImage = () => {
    return (
        <div className='relative mt-20 mx-10 w-[70%]'>
            <div className='relative w-full h-auto'>
                <img className='w-full h-auto object-contain' src={mainFestivalImage} alt="Valhalla Festival Logo" />
                <div className='absolute bottom-[-1%] right-[2%]'>
                    <GlitchEffect text='2025' />
                </div>
            </div>
        </div>
    )
}

export default MainImage

// max-w-[45vw] max-h-[100vh]