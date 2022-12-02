import React from 'react'

const stats = () => {
    return (
        <div className="stats p-5 bg-primary">
            <div className='bg-primary text-white xs:text-2xl md:text-3xl items-center mt-10 text-center columns-3 gap-x-0 p-5 '>
                <p>
                    <span className='ss:text-[1.2rem] ss:text-[2rem] lg:text-[2.5rem]'>3800+</span> <span className='captialize text-gradient xs:text-[1.1rem] ss:text-[1.7rem] lg:text-[2.5rem]'>user active </span>
                </p>
                <p>
                    <span className='ss:text-[1.2rem] ss:text-[2rem] lg:text-[2.5rem]'>230+</span> <span className='captialize text-gradient xs:text-[1.1rem] ss:text-[1.7rem] lg:text-[2.5rem]'> trusted by company </span>
                </p>
                <p>
                    <span className='ss:text-[1.2rem] ss:text-[2rem] lg:text-[2.5rem]'>$230M+</span> <span className='captialize text-gradient xs:text-[1.1rem] ss:text-[1.7rem] lg:text-[2.5rem]'> transactions </span>
                </p>
            </div>
        </div>
    )
}

export default stats