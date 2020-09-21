import React from 'react'

function Hero({handleLogout}) {
    return (
        <div>
            <h1>Hello</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Hero;
