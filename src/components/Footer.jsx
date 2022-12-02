import React from 'react'
import { logo } from '../assets'

const Footer = () => {
  return (
    <div className='bg-primary ss:p-15 xs:p-5 flex flex-wrap justify-around text-[1.2rem] gap-8 ss:items-center md:items-start'>
        <div className='branding'>
            <img src={logo} alt="logo" className='p-5' />
            <p className='text-dimWhite text-[1.2rem] p-5'>
                A new way to make the payments easy,<br /> reliable and secure.
            </p>
        </div>

        <div className="useful leading-loose">
            <h2 className='text-white text-[1.4rem]'>Usefull links</h2>
            <li className='text-dimWhite list-none hover:text-white'><a href="#">Content</a></li>
            <li className='text-dimWhite list-none hover:text-white'><a href="#">How it works</a></li>
            <li className='text-dimWhite list-none hover:text-white'><a href="#">Create</a></li>
            <li className='text-dimWhite list-none hover:text-white'><a href="#">Explore</a></li>
            <li className='text-dimWhite list-none hover:text-white'><a href="#">Teams & Services</a></li> 
        </div>

        <div className="community leading-loose">
            <h2 className='text-white text-[1.4rem]'>Community</h2>
            <li className='text-dimWhite list-none hover:text-white'><a href="#">Help Center</a></li>
            <li className='text-dimWhite list-none hover:text-white'><a href="#">Partners</a></li>
            <li className='text-dimWhite list-none hover:text-white'><a href="#">Suggestions</a></li>
            <li className='text-dimWhite list-none hover:text-white'><a href="#">Blog</a></li>
            <li className='text-dimWhite list-none hover:text-white'><a href="#">Newsletters</a></li> 
        </div>

        <div className="partner leading-loose">
            <h2 className='text-white text-[1.4rem]'>Partner</h2>
            <li className='text-dimWhite list-none hover:text-white'><a href="#">Our Partner</a></li>
            <li className='text-dimWhite list-none hover:text-white'><a href="#">Become a Partner</a></li>
        </div>


    </div>
  )
}

export default Footer