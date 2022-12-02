import React from 'react'
import { logo, menu, close } from '../assets'
import { useState } from 'react'
const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <nav className="navbar flex flex-row justify-between items-center p-8 bg-primary text-white font-poppins">
            <div className="logo w-40"><img src={logo} alt="" /></div>

            <div className="items">
                <ul className='list-none md:flex hidden px-10 text-lg'>
                    <li className='mr-10'><a href="#">Home</a></li>
                    <li className='mr-10'><a href="#">About Us</a></li>
                    <li className='mr-10'><a href="#">Features</a></li>
                    <li><a href="#">Solution</a></li>
                </ul>
            </div>

            <div className="flex-col md:hidden cursor-pointer">
                <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className='w-8'
                    onClick={() => setToggle((prev) => !prev)}
                />

                <div className={ `${toggle ? 'flex-col' : 'hidden'} absolute bg-black-gradient p-2 right-3 top-24 w-32 text-center rounded `}>
                    <ul className= 'list-none text-lg'>
                        <li className='mb-3'><a href="#">Home</a></li>
                        <li className='mb-3'><a href="#">About Us</a></li>
                        <li className='mb-3'><a href="#">Features</a></li>
                        <li><a href="#">Solution</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar