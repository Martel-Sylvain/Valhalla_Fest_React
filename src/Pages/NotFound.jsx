import React from 'react';
import { Link } from 'react-router-dom';
import NotFound404 from '../Components/NotFound404/NotFound404';


const NotFound = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center bg-blackV'>
            <div>
                <NotFound404 text='404' />
            </div>
            <h1 className='text-white mb-4'>Sorry... this page doesn't exist</h1>
            <Link to='/' className='text-yellowV'>
                Back to Homepage
            </Link>
        </div>
    );
};

export default NotFound;