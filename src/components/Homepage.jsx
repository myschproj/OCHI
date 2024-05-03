import React from 'react'
import { motion } from "framer-motion"

export const Homepage = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className='z-10 w-full h-screen '>
            <div className='text-[7vw] mt-[12%] leading-[6.5vw] px-10  font-semibold  tracking-tighter'>
                <h1>WE CREATE</h1>
                <h1 className='flex items-center'>
                    <motion.div initial={{ width: 0 }}
                        animate={{ width: "10vw" }}
                        transition={{ ease: [0.11, 0, 0.5, 0], duration: 1 }} className='w-[10vw] h-[7vw] mt-6 '>
                        <img className='rounded-md' src="src\assets\content-image01.jpg" alt="" />
                    </motion.div>
                    EYE-OPENING
                </h1>
                <h1>PRESENTATIONS</h1>
            </div>
            <div className='flex border-t border-zinc-600 pt-10 justify-between items-center px-10 mt-4 text-[1.2vw]'>
                <h2>For public and private companies</h2>
                <h2>From the first pitch to IPO</h2>
                <div className='flex gap-2 items-center'>
                    <button className='px-2 py-1 border-[1px] border-zinc-900 rounded-full' type='button'>START THE PROJECT</button>
                    <div className=' border border-black rounded-full h-8 w-8 flex items-center justify-center'>
                        <span className="material-symbols-outlined">north_east</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
