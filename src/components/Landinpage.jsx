import React from 'react'
import NavBar from '../common/NavBar'

const Landinpage = () => {
  return (
    <div className='w-screen md:h-screen h-[60rem] flex md:justify-center items-center relative bg-[url(/assets/landingbackground.jpg)]'>
        <div className=' md:w-[80rem] md:h-full  flex md:justify-around justify-center items-center md:flex-nowrap flex-wrap'>
          <img
          className=' md:w-[30rem] w-[26rem] object-fill '
          src="/assets/wave-haikei (3).png"
          alt="" />

          <div className=' md:w-[40rem] md:px-0 px-3 text-center flex justify-center items-center md:h-[20rem] font-semibold text-slate-100  leading-7 tracking-wider text-2xl '>
           <p>
              Welcome to our digital library, where endless knowledge awaits. Explore our virtual shelves and embark on a journey of discovery.
              With just a click, unlock a world of learning and inspiration. Welcome to a new era of accessible knowledge.
           </p>
          </div>
        </div>
    </div>
  )
}

export default Landinpage
