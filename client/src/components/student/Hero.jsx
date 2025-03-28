import React from 'react'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-[#EBEAFF]'>
      <h1 className='relative font-bold text-gray-800 max-w-3xl mx-auto md:text-[48px] text-[28px]'>Unlock your potential with Learnify – where learning  <span className='text-[#9694FF]'>meets your ambitions!</span></h1>
      <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>We bring together world-class instructors, interactive content, and a supportive
      community to help you achieve your personal and professional goals.</p>
      <p className='md:hidden text-gray-500 max-w-sm mx-auto'>We bring together world-class instructors to help you achieve your professional goals.</p>
      <SearchBar/>
    </div>
  )
}

export default Hero