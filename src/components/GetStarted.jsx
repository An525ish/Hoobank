import React from 'react'
import  {arrowUp}  from '../assets'

const GetStarted = () => {
  return (
    <div className="w-[9rem] h-[9rem] rounded-full bg-blue-gradient p-[2px] font-poppins">
        <div className="w-[100%] h-[100%] rounded-full bg-primary flex justify-center items-center gap-1 p-1 cursor-pointer">
            <p className='text-gradient font-semibold text-2xl text-center'> Get <span className='inline-block'> <img src={arrowUp} alt="arrowUp" className=''/> </span>
            Started </p>

        </div>

    </div>
  )
}

export default GetStarted