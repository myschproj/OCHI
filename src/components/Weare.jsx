import React from 'react'
import { motion } from "framer-motion"

export const Weare = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed className=' z-100 w-full h-1/4 font-semibold flex overflow-hidden bg-[#004D43] text-[28vw] whitespace-nowrap text-white border-t-2 border-b-2 rounded-r-lg rounded-l-lg'>
        <motion.h2 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease: 'linear', duration: 10}} className='pr-4'>WE ARE OCHI</motion.h2>
        <motion.h2 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease: 'linear', duration: 10}} className='pr-4'>WE ARE OCHI</motion.h2>
        <motion.h2 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease: 'linear', duration: 10}} className='pr-4'>WE ARE OCHI</motion.h2>
    </div>
  )
}
