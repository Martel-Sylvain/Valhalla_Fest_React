import React from 'react'
import backgroundImage from '../assets/img/Textures/Texture_2.png/'
import MainImage from '../Components/MainImage/MainImage';
import Countdown from '../Components/Countdown/Countdown';
import SeparationLine from '../Components/SeparationLine/SeparationLine';
import Video from '../Components/Video/Video';
import AlreadyConfirmed from '../Components/AlreadyConfirmed/AlreadyConfirmed';
import LinkButton from '../Components/LinkButton/LinkButton';
import GetYourTicket from '../Components/GetYourTicket/GetYourTicket';
import Footer from '../Components/Footer/Footer';
import LateralMenu from '../Components/LateralMenu/LateralMenu';

const Home = () => {
    return (
        <div className='h-full flex items-center justify-center flex-col bg-cover bg-center' style={{ backgroundImage: `url(${backgroundImage})` }}>

            {/* MAIN IMAGE */}
            <MainImage />

            {/* COUNTDOWN */}
            <div className='relative'>
                <Countdown />
            </div>

            <SeparationLine />

            {/* VIDEO */}
            <Video />

            <SeparationLine />

            {/* ALREADY CONFIRMED */}
            <AlreadyConfirmed />
            <LinkButton to="/lineup">All Bands</LinkButton>

            <SeparationLine />

            {/* GET YOUR TICKET */}
            <GetYourTicket />
            <LinkButton to="/tickets">Tickets</LinkButton>

            <SeparationLine />

            {/* FOOTER */}
            <Footer />

            {/* LATERAL SOCIAL MEDIA MENU*/}
            <LateralMenu />

        </div>
        // </div >
    );
};

export default Home;

