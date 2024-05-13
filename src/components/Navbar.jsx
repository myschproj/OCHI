import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between px-10 py-2 items-center text-[1.2vw]'>
        <h1 className='text-[3vw] font-semibold'>ochi</h1>
        <div className='hidden gap-6 md:flex'>
            <a href="#">Итериум.WMS</a>
            <a href="#">Итериум.TMS</a>
            <a href="#">Итериум.HRMS</a>
            <a href="#">Итериум.CRM</a>
            <a href="#">Итериум.Дев</a>
        </div>
        <a href='#'>О нас</a>
    </div>
  )
}

export default Navbar
