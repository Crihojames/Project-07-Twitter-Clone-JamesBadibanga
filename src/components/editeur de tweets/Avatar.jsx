import React from 'react';
import Image from '../../src/images/profile-photo.png'

const Avatar = () => {
    return (
        <div className='avatar'>
            <img src= {Image} alt="images" />
        </div>
    );
};

export default Avatar;