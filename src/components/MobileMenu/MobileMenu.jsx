import React from 'react'
import {Link} from 'react-router-dom'
const MobileMenu = () => {
  return (
    <div className='bg-lightPurple py-3'>
        <div className='flex flex-col items-center gap-[20px]'>
            <a href='#keyFeatures'>Key Features</a>
            <Link to='/contact'>
                <button className='bg-tempBg bg-navBg text-white py-[15px] px-[28px] rounded-[30px]  '>
                        Contact Us
                </button>
            </Link>
        </div>
    </div>
  )
}

export default MobileMenu