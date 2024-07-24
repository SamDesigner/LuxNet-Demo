import React from 'react'

const Enquiries = () => {
  return (
    <div className='showcaseBg py-[100px] lg:h-[100vh] px-[16px] flex flex-col justify-center'>
        <div className='max-w-[1440px] mx-auto flex flex-col items-center gap-[40px]'>
            <div className='text-white flex flex-col items-center'>
                <h1 className='text-[25px] md:text-[60px] text-center'>For enquiries and partnerships</h1>
                <p className='text-center'>Our team is here to help</p>
            </div>
            <button className='bg-lightPurple px-[20px] py-[8px] rounded-[20px]'>Contact Us</button>
        </div>
    </div>
  )
}

export default Enquiries