import React from 'react'
import VideoIntro from '../../assets/videos/Intro_trailer.mp4'

const Video = () => {
    return (
        <div className='w-[75vw] mt-[3vh] lg:mt-[7vh]'>
            <video className='w-full rounded-xl' autoPlay muted loop>
                <source src={VideoIntro} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default Video