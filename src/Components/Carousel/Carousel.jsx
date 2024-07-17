import React, { useState } from 'react'
import { bandsData } from '../../assets/assets'
import rightArrow from '../../assets/img/Icones/Right_Arrow.svg'
import rightArrowHovered from '../../assets/img/Icones/Right_ArrowY.svg'
import leftArrow from '../../assets/img/Icones/Left_Arrow.svg'
import leftArrowHovered from '../../assets/img/Icones/Left_ArrowY.svg'

const Carousel = () => {

    const [currentIndex, setCurrentIndex] = useState(0);


    // pour les boutons prev et next
    const [isHoveredPrev, setIsHoveredPrev] = useState(false);
    const [isHoveredNext, setIsHoveredNext] = useState(false);


    // à l'aide de .map, on créé un tableau de photos à partir de bandsData
    const bandPhoto = bandsData.map(band => band.photo);
    // à l'aide de .map, on créé un tableau de noms de groupes à partir de bandsData
    const bandName = bandsData.map(band => band.name);
    // à l'aide de .map, on créé un tableau des descriptions à partir de bandsData
    const bandDescription = bandsData.map(band => band.description);
    // à l'aide de .map, on créé un tableau de logos à partir de bandsData
    const bandLogo = bandsData.map(band => band.logo);
    // à l'aide de .map, on créé un tableau de la liste des membres à partir de bandsData
    const bandMembers = bandsData.map(band => band.members);

    const prevSlide = () => {
        const newIndex = (currentIndex - 1 + bandPhoto.length) % bandPhoto.length;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const newIndex = (currentIndex + 1) % bandPhoto.length;
        setCurrentIndex(newIndex);
    };

    return (
        <div className='h-[100vh]'>
            <div className='w-full flex items-center justify-center relative mt-[50px] md:mt-[10vh]'>
                <div className='relative w-[90%]'>
                    <img
                        src={bandPhoto[currentIndex]}
                        alt={`${currentIndex} band photo`}
                        className="mx-auto max-w-full max-h-[60vh] object-contain rounded-lg" />
                    <div className='text-center lg:text-start mt-5 lg:absolute lg:top-28 lg:left-5 xl:top-40 xl:left-10 xl:w-[30vw] xl:max-w-[410px] bg-black bg-opacity-50 rounded-lg p-10'>
                        <img
                            src={bandLogo[currentIndex]}
                            alt={`${currentIndex} band logo`}
                            className="max-w-[400px] mx-auto object-contain rounded-lg" />
                        <h2 className='text-whiteV text-xl xl:text-2xl font-fontTitle mt-10'>{bandName[currentIndex]}</h2>
                        <div className='text-whiteV text-base xl:text-xl font-fontText mt-5'>{bandMembers[currentIndex].split('\n').map((line, index) => (
                            <p key={index}>{line}</p>))}
                        </div>
                    </div>
                    <div className='text-center mt-5'>
                        <button
                            onClick={prevSlide}
                            onMouseEnter={() => setIsHoveredPrev(true)}
                            onMouseLeave={() => setIsHoveredPrev(false)}
                            className="mr-2 bg-transparent">
                            <img
                                src={isHoveredPrev ? leftArrowHovered : leftArrow}
                                alt="Previous"
                                className="w-[5vw] max-w-[70px]" />
                        </button>
                        <button
                            onClick={nextSlide}
                            onMouseEnter={() => setIsHoveredNext(true)}
                            onMouseLeave={() => setIsHoveredNext(false)}
                            className="ml-2 bg-transparent">
                            <img
                                src={isHoveredNext ? rightArrowHovered : rightArrow}
                                alt="Next"
                                className="w-[5vw] max-w-[70px]" />
                        </button>
                    </div>
                    <div className='bg-black bg-opacity-50 rounded-lg p-10 mt-5'>
                        <div className='text-whiteV text-base xl:text-xl font-fontText'>{bandDescription[currentIndex].split('\n').map((line, index) => (
                            <p key={index}>{line}</p>))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Carousel