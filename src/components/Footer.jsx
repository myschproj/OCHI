import React from 'react'

const Footer = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className=' w-full h-screen px-10'>
      <div className='flex mt-4'>
        <div className='w-1/2 text-[6vw] font-semibold'>
          <h2>ИЗ ИТЕРИУМА</h2>
        </div>
        <div className='w-1/2 '>
          <h2 className='text-[6vw] font-semibold'>С ЛЮБОВЬЮ ❤️</h2>
          <div className='flex gap-10 py-5'>
            <div className='w-1/2 font-thin text-[1.2vw]'>
              <div className='flex flex-col pt-5'>
                <h6>Социальное:</h6>
                <a href="">Блог</a><a href="">Телеграм</a><a href="">ВКонтакте</a><a href="">Сообщество</a>
              </div>
              <div className='flex flex-col pt-5'>
                <h6>Адрес:</h6>
                <a href="#">Россия, Москва</a><a href="">Дмитровское шоссе, дом 7к1, помещение 1</a><a href="">Россия, Казань</a><a href="">улица Ленина, дом 7к1, помещение 1</a>
              </div>
              <div className='flex flex-col pt-5'>
                <h6>Электропочта:</h6>
                <a href="#">hello@ochi.design</a>
              </div>
            </div>
            <div className='w-1/2 font-thin'>
              <div className='flex flex-col pt-5 text-[1.2vw]'>
                <h6>Продукты:</h6>
                <a href="">Итериум.WMS</a><a href="">Итериум.TMS</a><a href="">Итериум.HRMS</a><a href="">Итериум.CRM</a><a href="">Итериум.Дев</a><a href="">Итериум.FinMS</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center mt-6'>
        <h4 className='w-1/2 text-[2vw] font-semibold'>Итериум</h4>
        <div className='w-1/2 font-light text-zinc-400 flex justify-between items-center text-[1vw]'>
          <a href="#">© ООО "ИТЕРИУМ", 2024</a>
          <a href="#">Запрогано в Итериуме</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
