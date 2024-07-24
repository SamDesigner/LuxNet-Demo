import React from 'react'
import './ShowcaseArea.css'
const ShowcaseArea = () => {
  return (
    <div className='showcaseBg '>
        <div className='max-w-[1440px] mx-auto px-[16px] lg:px-[80px]  h-[100vh] flex flex-col gap-[70px] justify-center items-center'>
            <div className=' md:w-[800px] flex flex-col gap-[15px]'>
                <h1 className='text-[25px] md:text-[60px] font-[500] text-white text-center'>Verify Real Estate Properties from your comfort Zone</h1>
                <p className='text-white text-center'>Be among the first experience this luxury, subscribe to our newsletter and get notified when we launch</p>
            </div>

            <div className='w-full flex justify-center '>
                <div className='bg-white p-[5px]  md:w-3/4 lg:w-1/2 flex rounded-[30px] '>
                    <input type='text ' className='w-[65%] md:w-[75%] rounded-[30px] px-[20px] outline-none' placeholder='Oyetimi@gmail.com' />
                    <button className='bg-mainPurple w-[35%] md:w-[25%] text-white px-[15px] py-[10px] rounded-[30px] '>Subscribe</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShowcaseArea