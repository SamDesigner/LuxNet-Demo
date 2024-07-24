import React from 'react'
import './KeyFeatures.css'
const KeyFeatures = () => {
  return (
    <div className='keyfeatureSection lg:px-[80px] py-[50px] md:py-[100px] px-[16px] flex flex-col justify-center lg:h-[100vh] ' id='keyFeatures'>
        <div className='max-w-[1440px] mx-auto flex flex-col gap-[40px] md:gap-[80px]'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-[25px] md:text-[45px] font-[500]'>Explore our key features</h1>
                <p className='text-center md:text-left'>Introducing a sustainable solution for Secured Land Titles</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:flex lg:justify-center lg:items-end gap-[25px] '>
                <div className='bg-gray-300 border-white border-2 py-[20px] px-[10px] flex flex-col justify-between gap-[30px] lg:w-[320px] lg:h-[300px] rounded-[20px]   lg:rotate-[-10deg]'>
                    <h3 className='text-grayText text-[25px] md:text-[30px] font-[600] '>Real Estate Marketplace</h3>
                    <p className='text-gray-700 text-[18px] md:text-[22px]'>Free access to various licensed real estate experts for services</p>
                </div>
                <div className='bg-gray-300 border-white border-2 py-[20px] px-[10px] flex flex-col justify-between gap-[30px] lg:w-[320px] lg:h-[300px] rounded-[20px] lg:mb-[5vh]  '>
                    <h3 className='text-grayText text-[25px] md:text-[30px] font-[600] '>Land Ownership Clarification</h3>
                    <p className='text-gray-700 text-[18px md:text-[22px]'>Easy access to land ownership records</p>
                </div>
                <div className='bg-gray-300 border-white border-2 py-[20px] px-[10px] flex  flex-col justify-between gap-[30px] lg:w-[320px] lg:h-[300px] rounded-[20px] lg:rotate-[10deg]'>
                    <h3 className='text-grayText text-[25px] md:text-[30px] font-[600]'>Geospatial Mapping</h3>
                    <p className='text-gray-700 text-[18px md:text-[22px]'>Detailed and accurate land maps using advanced GIS technology.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KeyFeatures