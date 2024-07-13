import React from 'react';
import './glitchEffect.css';

const GlitchEffect = ({ text }) => {
    return (
        <div className="relative rotate-[-4deg]">
            <h1 className="text-redV font-coprgtb font-bold text-animation-1 text-[3vw]">{text}</h1>
            <h1 className="text-whiteV font-coprgtb font-bold text-animation-2 absolute top-0 left-0 text-[3vw]">{text}</h1>
            <h1 className="text-yellowV font-coprgtb font-bold text-animation-3 absolute top-0 left-0 text-[3vw]">{text}</h1>
        </div>
    );
}

export default GlitchEffect;