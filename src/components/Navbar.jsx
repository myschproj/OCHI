import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between px-10 py-2 items-center text-[1.2vw]'>
        <h1 className='text-[3vw] font-semibold'>ochi</h1>
        <div className='hidden gap-6 md:flex'>
            <a href="#">Services</a>
            <a href="#">Our work</a>
            <a href="#">About us</a>
            <a href="#">Insights</a>
        </div>
        <a href='#'>Contact Us</a>
    </div>
  )
}

export default Navbar