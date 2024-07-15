import React, { useState } from 'react'
import DaysArray from './DaysArray'
import SeparationLine from '../SeparationLine/SeparationLine';

//on va définir ici les 3 tableaux en fonction de chaque jour


const OrderRunning = () => {

    return (
        <div className="text-whiteV text-center mt-[10vh]">
            <h1 className='text-center font-fontTitle text-[4vw] mb-[5vh]'>Running Order</h1>
            <h2 className="font-fontTitle text-center text-[2vw] font-bold mb-[5vh]">Day 1</h2>
            <DaysArray day="Day 1" />
            <div className="flex justify-center">
                <SeparationLine />
            </div>
            <h2 className="font-fontTitle text-center text-[2vw] font-bold mb-[5vh] mt-[5vh]">Day 2</h2>
            <DaysArray day="Day 2" />
            <div className="flex justify-center">
                <SeparationLine />
            </div>
            <h2 className="font-fontTitle text-center text-[2vw] font-bold mb-[5vh] mt-[5vh]">Day 3</h2>
            <DaysArray day="Day 3" />
            <div className="flex justify-center">
                <SeparationLine />
            </div>
        </div>
    );
};
export default OrderRunning