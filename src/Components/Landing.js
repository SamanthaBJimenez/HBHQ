import React from 'react';
import backdrop from './../ImgFiles/IMG_0701.jpeg';

const Landing = () => {
    return (
        <div class='landing-main'>
            <img class='backdrop' src={backdrop} alt='backdrop' />
            <h1 class='brand-name'>Highbred HQ</h1>
        </div>
    )
}

export default Landing;