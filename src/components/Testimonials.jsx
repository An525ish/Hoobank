import React from 'react'
import { quotes, people01, people02, people03, airbnb, binance, coinbase, dropbox } from '../assets'

const Testimonials = () => {
    return (
        <div className='bg-primary text-white font-poppins ss:p-20 ss:pt-0 xs:p-10'>
            <div className='flex justify-around items-center p-5'>
                <h2 className='text-[3.4vw] md:w-[40%] xs:w-[50%]'>
                    What people are saying about us
                </h2>
                <p className='w-[40%] text-[1.8vw] text-dimWhite'>
                    Everything you need to accept card payments and grow your business anywhere on the planet.
                </p>
            </div>

            <div className="cards p-10 flex xs:flex-col md:flex-row justify-around items-center gap-4 mt-10">
                <div className="card xs:p-5 md:p-6 md:w-[30%] md:h-[25rem] rounded-[2rem] cursor-pointer feedback-card ss:w-[60%] flex md:block flex-col items-center gap-4">
                    <div className='md:p-10 ss:p-0'>
                        <img src={quotes} alt="quotes" />
                    </div>
                    <p className='lg:text-[1.2rem] md:text-[1rem] tracking-wide my-5 md:h-[8rem] ss:text-center md:text-left'>
                        Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.
                    </p>
                    <div className='flex gap-3'>
                        <img src={people01} alt="ppl2" className='w-[3rem]' />
                        <div>
                            <h3>Herman Jensen</h3>
                            <h4>Founder & Leader</h4>
                        </div>
                    </div>
                </div>
                <div className="card xs:p-5 md:p-6 md:w-[30%]  md:h-[25rem] rounded-[2rem] cursor-pointer feedback-card ss:w-[60%] flex md:block flex-col items-center gap-4">
                    <div className='md:p-10 ss:p-0'>
                        <img src={quotes} alt="quotes" />
                    </div>
                    <p className='lg:text-[1.2rem] md:text-[1rem] tracking-wide my-5 md:h-[8rem] ss:text-center md:text-left'>
                        Money makes your life easier. If you're lucky to have it, you're lucky.
                    </p>
                    <div className='flex gap-3'>
                        <img src={people02} alt="ppl2" className='w-[3rem]' />
                        <div>
                            <h3>Steve Mark</h3>
                            <h4>Founder & Leader</h4>
                        </div>
                    </div>
                </div>
                <div className="card xs:p-5 md:p-6 md:w-[30%]  md:h-[25rem] rounded-[2rem] cursor-pointer feedback-card ss:w-[60%] flex md:block flex-col items-center gap-4">
                    <div className='md:p-10 ss:p-0'>
                        <img src={quotes} alt="quotes" />
                    </div>
                    <p className='lg:text-[1.2rem] md:text-[1rem] tracking-wide my-5 md:h-[8rem] ss:text-center md:text-left'>
                        It is usually people in the money business, finance, and international trade that are really rich.
                    </p>
                    <div className='flex gap-3'>
                        <img src={people03} alt="ppl2" className='w-[3rem]' />
                        <div>
                            <h3>Ken Gallaghar</h3>
                            <h4>Founder & Leader</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="CTA flex justify-around items-center md:p-20 ss:p-10 xs:pt-0">
                <img src={airbnb} alt="airbnb" className='md:w-[10rem] xs:w-[5rem]' />
                <img src={binance} alt="binance" className='md:w-[12rem] xs:w-[5rem]' />
                <img src={coinbase} alt="coinbase" className='md:w-[10rem] xs:w-[5rem]' />
                <img src={dropbox} alt="dropbox" className='md:w-[12rem] xs:w-[5rem]' />
            </div>

            <div className="service md:px-20 xs:p-5 flex md:flex-row xs:flex-col xs:text-center xs:my-10 ss:my-5 md:text-left justify-between items-center font-poppins bg-black-gradient rounded-[2rem] w-[85%] mx-auto">
                <div className='md:p-10 xs:p-2 w-[60%] xs:w-[100%]'>
                    <h2 className='text-[3.4vw] md:text-[2.8vw] font-semibold '>Let's try our service now!</h2>
                    <p className='md:text-[1.1rem] lg:text-[1.3rem] xs:text-[1rem] my-10 xs:my-2 text-dimWhite lg:w-[80%] md:w-[100%] xs:w-[100%]'> Everything you need to accept card payments and grow your business anywhere on the planet</p>
                </div>
                <button className='bg-blue-gradient w-[12rem] p-5 rounded-[1rem] text-black text-[1.2rem] font-semibold'>Get Started</button>
            </div>
        </div>
    )
}

export default Testimonials