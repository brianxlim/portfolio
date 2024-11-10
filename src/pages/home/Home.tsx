import React from 'react';
import meBig from '../../assets/meHomePage.png';
import LandingText from './LandingText';

function Home() {
    return (
        <div>
            <div className='flex flex-row'>
                <div className='w-7/12 flex items-end justify-center mt-28'>
                    <div className='w-2/3'>
                        <img src={meBig} alt="Profile picture" />
                    </div>
                </div>

                {/* Text Section */}
                <div className='w-5/12 flex flex-col justify-center'>
                    <span className='text-8xl font-bold text-white'>
                        I am a
                    </span>
                    <LandingText />
                </div>
            </div>
        </div>
    );
}

export default Home;
