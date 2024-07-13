import React, { useState, useEffect } from 'react';

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const calculateTimeLeft = () => {
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        const eventDate = new Date('2025-02-25').getTime();
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance < 0) {
            return null;
        } else {
            return {
                days: Math.floor(distance / day),
                hours: Math.floor((distance % day) / hour),
                minutes: Math.floor((distance % hour) / minute),
                seconds: Math.floor((distance % minute) / second)
            };
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!timeLeft) {
        return (
            <div className="my-5 sm:my-7 md:my-10 lg:my-16 xl:my-20 2xl:my-24 mx-auto font-coprgtb text-center text-xl text-whiteV sm:text-2xl lg:text-3xl xl:text-4xl">
                <h2 id="countdownTitle">Let's Go!!</h2>
            </div>
        );
    }

    return (
        <div className="my-5 sm:my-7 md:my-10 lg:my-16 xl:my-20 2xl:my-24 mx-auto font-coprgtb text-center text-xl text-whiteV sm:text-2xl lg:text-3xl xl:text-4xl">
            <h2 id="countdownTitle">Opens in :</h2>
            <div id="countdown">
                <ul className="flex justify-between gap-3 sm:gap-5 md:gap-9 lg:gap-24 xl:gap-32 2xl:gap-40">
                    <li className="flex flex-col items-center text-sm lg:text-base xl:text-xl">
                        <span className="block text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl" id="days">{timeLeft.days}</span>Days
                    </li>
                    <li className="flex flex-col items-center text-sm lg:text-base xl:text-xl">
                        <span className="block text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl" id="hours">{timeLeft.hours}</span>Hours
                    </li>
                    <li className="flex flex-col items-center text-sm lg:text-base xl:text-xl">
                        <span className="block text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl" id="minutes">{timeLeft.minutes}</span>Minutes
                    </li>
                    <li className="flex flex-col items-center text-sm lg:text-base xl:text-xl">
                        <span className="block text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl" id="seconds">{timeLeft.seconds}</span>Seconds
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Countdown;

