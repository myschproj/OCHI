import React from 'react'

export const Homepage = () => {
    return (
        <div className='w-full h-screen'>
            <div className='text-[7vw] leading-[6.5vw] px-10 mt-20 font-semibold border-b border-zinc-600 pb-28 tracking-tighter'>
                <h1>WE CREATE</h1>
                <h1>EYE-OPENING</h1>
                <h1>PRESENTATIONS</h1>
            </div>
            <div className='flex justify-between items-center px-10 mt-4'>
                <h2>For public and private companies</h2>
                <h2>From the first pitch to IPO</h2>
                <div className='flex gap-2 items-center'>
                    <button className='px-2 py-1 border-[1px] border-zinc-900 rounded-full' type='button'>START THE PROJECT</button>
                    <div className='h-3 w-3 border border-black'>
                        <span className="material-symbols-outlined">north_east</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
