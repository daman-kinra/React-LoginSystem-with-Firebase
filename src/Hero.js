import React from 'react';
import './Hero.css';

function Hero({handleLogout}) {
    return (
        <div className='cont'>
        <div className='nav'>
            <h1>XcLass</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
        </div>
    )
}

export default Hero;
