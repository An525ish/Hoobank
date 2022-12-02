import React from 'react'
import { shield, star, send } from '../assets'

const Business = () => {
    return (
        <div className='flex flex-col md:flex-row bg-primary text-white font-poppins md:p-16 md:pt-24 xs:p-4 ss:p-12 gap-5 justify-center'>
            <div className="businessCntnt md:w-[50%] p-5">
                <h2 className='ss:text-[3.4vw] xs:text-[1.8rem] font-semibold'>You do the business, we'll handle the money</h2>
                <p className='text-[1.2rem] tracking-wide text-slate-300 my-10'>
                    With the right credit card, you can improve the financial life by building credit, earning rewards and saving money. But with hundreds of credit cards in the market.
                </p>
                <button className='bg-blue-gradient w-[12rem] p-5 rounded-[1rem] text-black text-[1.2rem] font-semibold'>Get Started</button>
            </div>
            <div className='flex flex-col p-5 gap-1 md:w-[45%] lg:w-[35%]'>
                <div className='flex gap-4 p-5 cursor-pointer rounded-[2rem] feature-card'>
                    <div className='w-[64px] h-[64px] rounded-full bg-dimBlue flex justify-center items-center p-2'>
                        <img src={star} alt="star" />
                    </div>
                    <div className="cntnt">
                        <h3>Rewards</h3>
                        <p className='text-dimWhite'>The best credit cards offer some tantalizing combination of promotions and prizes</p>
                    </div>
                </div>
                <div className='flex gap-4 p-5 cursor-pointer rounded-[2rem] feature-card'>
                    <div className='w-[64px] h-[64px] rounded-full bg-dimBlue flex justify-center items-center p-2'>
                        <img src={shield} alt="shield" />
                    </div>
                    <div className="cntnt">
                        <h3>100% Secured</h3>
                        <p className='text-dimWhite'>We take procative steps make sure your information and transactions are secure</p>
                    </div>
                </div>
                <div className='flex gap-4 p-5 cursor-pointer rounded-[2rem] feature-card'>
                    <div className='w-[64px] h-[64px] rounded-full bg-dimBlue flex justify-center items-center p-2'>
                        <img src={send} alt="send" />
                    </div>
                    <div className="cntnt">
                        <h3>Balance Transfer</h3>
                        <p className='text-dimWhite'>A balance transfer credit card can save you a lot of money in interest charges</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Business