import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between px-10 py-2 items-center'>
        <h1 className='text-4xl font-semibold'>ochi</h1>
        <div className='flex gap-6 text-base'>
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