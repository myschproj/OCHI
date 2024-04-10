import React from 'react'

const Ready = () => {
    // const [round, setRound] = useState(0)

    // useEffect(() => {
    //     window.addEventListener("mousemove", (e) => {
    //         let moveY = e.clientY;
    //         let moveX = e.clientX;

    //         let deltaX = moveX - window.innerWidth / 2;
    //         let deltaY = moveY - window.innerHeight / 2;

    //         let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
    //         setRound(angle - 180)
    //     })
    // })
    return (
        <div data-scroll data-scroll-section data-scroll-speed=".2" className='w-full h-screen bg-[#CDEA68] py-10'>
            <div className='relative'>
                <div className='text-[8vw] tracking-tighter leading-[8vw] flex flex-col text-center font-semibold mt-4'>
                    <h2>READY</h2>
                    <h2>TO START </h2>
                    <h2>THE PROJECT?</h2>
                </div>
                <div className='mt-4 flex items-center justify-center '>
                    <button className='px-4 py-2 outline outline-[black] bg-black text-white rounded-full' type="button">START THE PROJECT</button>
                </div>
                <h3 className='text-black flex items-center justify-center my-2'>or</h3>
                <div className='mt-4 flex items-center justify-center '>
                    <button className='px-4 py-2 outline outline-[black] bg-[#CDEA68] text-black rounded-full' type="button">HELLO@OCHI.DESIGN</button>
                </div>
            </div>
            {/* <div className=' top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-5'>
                <div className='w-[15vw] h-[15vw] bg-white rounded-full flex items-center justify-center'>
                    <div className='w-[10vw] h-[10vw] bg-black rounded-full flex items-center justify-center overflow-hidden'>
                        <div style={{ transform: `rotate(${round}deg)` }} className='w-full h-[2vw]'>
                            <div className='w-[2vw] h-[2vw] rounded-full bg-white'></div>
                        </div>
                    </div>
                </div>
                <div className='w-[15vw] h-[15vw] bg-white rounded-full flex items-center justify-center'>
                    <div className='w-[10vw] h-[10vw] bg-black rounded-full flex items-center justify-center overflow-hidden'>
                        <div style={{ transform: `rotate(${round}deg)` }} className='w-full h-[2vw]'>
                            <div className='w-[2vw] h-[2vw] rounded-full bg-white'></div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Ready