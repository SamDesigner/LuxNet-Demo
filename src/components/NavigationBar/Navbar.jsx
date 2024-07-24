import React from 'react'
import Logo from '../../assets/img/mainLogo.png'
import { Link } from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6";
import { GiCancel } from "react-icons/gi";
import MobileMenu from '../MobileMenu/MobileMenu';
import { useState } from 'react'
const Navbar = () => {
  const [isOpen , setIsOpen] = useState(false);
  const changeOpen = ()=>{
     setIsOpen(!isOpen);
  }
  return (
    <>
        <div className='bg-navBg py-[20px] px-[16px] lg:px-[80px]'>
            <div className='flex items-center justify-between max-w-[1440px] mx-auto '>
                <div className=''>
                    <img src={Logo} className='h-[40px] md:h-auto' alt='Logo' />
                </div>
                <div className='flex gap-[20px] items-center gap-[60px]'>
                    <a href='#keyFeatures' className='hidden md:block text-white'>Key features</a>
                    <Link to='/'>
                        <button className='hidden md:block bg-tempBg bg-navBg text-white py-[15px] px-[28px] rounded-[30px]  '>
                            Contact Us
                        </button>
                    </Link>
                    {isOpen 
                        ? <GiCancel onClick={changeOpen} className='md:hidden text-lightPurple text-[25px]' /> 
                        : <FaBarsStaggered onClick={changeOpen} className='md:hidden text-lightPurple text-[25px]' />
                    }
                    
                </div>
            </div>
        
        </div>
        {
           isOpen && <div><MobileMenu /></div>
        }
       
        
    </> 
  )
}

export default Navbar