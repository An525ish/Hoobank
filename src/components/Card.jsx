import React from 'react'
import { card } from '../assets'

const Card = () => {
    return (
        <div>
            <div className='bg-primary ss:p-20 ss:pt-0 xs:p-10 flex justify-center text-white items-center md:flex-row xs:flex-col'>
                <div className="billingCntnt md:w-[60%] lg:w-[50%] p-5">
                    <h2 className='text-[3.5vw] font-semibold'>Find a better card deal in few easy steps</h2>
                    <p className='text-[1.2rem] tracking-wide text-slate-300 my-10'>
                        With the right credit card, you can improve the financial life by building credit and earning rewards.
                        But with hundreds of cards in the market.
                    </p>
                    <button className='bg-blue-gradient w-[12rem] p-5 rounded-[1rem] text-black text-[1.2rem] font-semibold'>Get Started</button>
                </div>
                <div className='p-5'>
                    <img src={card} alt="bill" className='w-[35rem]' />
                </div>

            </div>
        </div>
    )
}

export default Card