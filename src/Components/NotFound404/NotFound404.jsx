import React from 'react';
import './notFound404.css';

const NotFound404 = ({ text }) => {
    return (
        <div className="relative">
            <h1 className="text-glitchR font-fontTitle font-bold text-animation-1 text-[10vw]">{text}</h1>
            <h1 className="text-glitchG font-fontTitle font-bold text-animation-2 absolute top-0 left-0 text-[10vw]">{text}</h1>
            <h1 className="text-glitchW font-fontTitle font-bold text-animation-3 absolute top-0 left-0 text-[10vw]">{text}</h1>
        </div>
    );
}

export default NotFound404;