import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className="banner-content text-center">
                <h1>Best food waiting for your belly</h1>
                <input type="text" placeholder="Search Your Food" />
            </div>
        </div>
    );
};

export default Banner;