import React from 'react'

export const Readmore = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed className=' z-10 w-full h-fit bg-[#CDEA68] px-10 py-5'>
        <div className='text-[3vw] pb-2 border-b-[1px] border-green-900'>
            <h2>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h2>
        </div>
        <div className='flex p-2 mt-4'>
            <div className='w-1/2'>
                <h3 className='text-4xl'>Our approach:</h3>
                <button className='border outline-none rounded-full text-white bg-zinc-900 px-4 py-2 mt-2' type='button'>READ MORE</button>
            </div>
            <div className='w-1/2 bg-cover overflow-hidden'>
                <img src='https://source.unsplash.com/1000x600?office' alt='read me image'></img>
            </div>
        </div>
    </div>
  )
}
