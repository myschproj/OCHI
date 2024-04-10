import React, { useEffect, useState } from 'react';
import bg from '../assets/Top-Viewbbcbv-1-scaled.jpg';

export const Lookout = () => {
    const [round, setRound] = useState(0)

    useEffect(()=>{
        window.addEventListener("mousemove", (e) =>{
            let moveY = e.clientY;
            let moveX = e.clientX;

            let deltaX = moveX - window.innerWidth/2;
            let deltaY = moveY - window.innerHeight/2;

            let angle = Math.atan2(deltaY, deltaX) * (180/Math.PI)
            setRound(angle -180)
        })
    })
    return (
        <div  className='w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-section data-scroll-speed="-.9" className=' -z-10 relative'>
                <img src={bg} alt='background image' className='w-full h-[100vh] object-cover' />
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-5'>
                    <div className='w-[15vw] h-[15vw] bg-white rounded-full flex items-center justify-center'>
                        <div className='w-[10vw] h-[10vw] bg-black rounded-full flex items-center justify-center overflow-hidden'>
                            <div style={{transform: `rotate(${round}deg)`}} className='w-full h-[2vw]'>
                                <div className='w-[2vw] h-[2vw] rounded-full bg-white'></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[15vw] h-[15vw] bg-white rounded-full flex items-center justify-center'>
                        <div className='w-[10vw] h-[10vw] bg-black rounded-full flex items-center justify-center overflow-hidden'>
                            <div style={{transform: `rotate(${round}deg)`}} className='w-full h-[2vw]'>
                                <div className='w-[2vw] h-[2vw] rounded-full bg-white'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
