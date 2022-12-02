import React from 'react'
import { bill, apple, google } from '../assets'

const Billing = () => {
    return (
        <div className='bg-primary ss:p-20 ss:pt-0 xs:p-10 flex justify-center text-white items-center md:flex-row xs:flex-col'>
            <div className='p-5'>
                <img src={bill} alt="bill" className='w-[35rem]' />
            </div>
            <div className="billingCntnt lg:w-[40%] md:w-[50%] ss:p-5 xs:p-1">
                <h2 className='text-[3.5vw] font-semibold'>Easily control your billing & invoicing</h2>
                <p className='text-[1.2rem] tracking-wide text-slate-300 mt-10'>
                    With the right credit card, you can improve the financial life by building credit, earning rewards and saving money. But with hundreds of credit cards in the market.
                </p>
                <div className='flex gap-5 mt-10'>
                    <img src={apple} alt="" />
                    <img src={google} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Billing