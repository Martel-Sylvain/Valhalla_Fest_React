import React from 'react'
import VideoIntro from '../../assets/videos/Intro_trailer.mp4'

const Video = () => {
    return (
        <div>
            <video autoPlay muted loop>
                <source src={VideoIntro} type='video/mp4' />Your browser does not support the video tag.</video>
        </div>
    )
}

export default Video