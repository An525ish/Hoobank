import React from 'react'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
    return (
        <section id="home" className='bg-primary md:pt-20 md:pl-20 font-poppins'>
            <div className="flex flex-col md:flex-row ">
                <div className='md:w-[60%] text-white p-5 flex flex-col gap-4'>
                    <div className="discount text-white flex gap-x-2 items-center bg-discount-gradient w-[23rem] rounded-[8px] px-2">
                        <img src={discount} alt="discount" className='w-8' />
                        <p className='uppercase text-grey'>20% <span className='text-slate-400'> discount for</span>  1 month <span className='text-slate-400'>account </span></p>
                    </div>

                    <div className="moto text-white relative flex">
                        <p className='xs:text-[7vw] md:text-[5rem] capitalize font-semibold leading-tight'>The next <span className='text-gradient'>generation </span>
                        payment method</p>
                        <div className=' lg:block lg:absolute top-5 right-[10rem] xs:hidden'>
                            <GetStarted />
                        </div>    
                    </div>

                    <div className="heroCntnt xs:mt-4 md:mt-12">
                        <p className='lg:text-[1.2rem] md:text-[1.05rem] ss:text-[1.3rem] w-[90%] lg:w-[65%] leading-10 tracking-wide text-slate-300'>
                            Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. <br />We examine annual percentage rates, annual fees.
                        </p>
                    </div>
                </div>

                <div className="robot self-center relative">
                    <img src={robot} alt="" className='w-[36rem] z-[5]'/>

                    <div className="absolute w-[60%] h-[70%] top-0 pink__gradient right-8 z-[0]">
                    </div>
                    <div className="absolute w-[20%] h-[80%] top-0 white__gradient rounded-full bottom-40 right-8">
                    </div>
                    <div className="absolute w-[60%] h-[70%] top-0 blue__gradient right-8 top-20 bottom-20">
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero