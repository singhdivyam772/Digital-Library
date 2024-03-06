import React from 'react'
import NavBar from '../common/NavBar'

const Landinpage = () => {
  return (
    <div
      className='w-screen h-screen relative flex justify-center items-center'>

      <div className=' flex flex-col justify-around items-between w-[80vw] bg-gradient-to-t from-slate-700 to-slate-200 h-[90vh] shadow-xl rounded-t-xl rounded-b-none'>
        {/* <NavBar /> */}
        <div className=' flex justify-between items-center w-full h-full '>
          <img
            className=' max-w-[30rem] max-h-[30rem] object-fill '
            src="/assets/wave-haikei (3).png"
            alt="" />
          <div className=' w-[60%] h-[100%] '>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landinpage
