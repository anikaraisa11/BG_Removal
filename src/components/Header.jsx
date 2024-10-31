import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20">
      {/* Left side */}
      <div className="text-center max-sm:text-left">
        <h1 className='text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>
          Remove the <br className='max-md:hidden' /> 
          <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>background</span> 
          from <br className='max-md:hidden' /> images for free.
        </h1>
        <p className='my-6 text-sm sm:text-base lg:text-lg text-gray-500'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br className='max-sm:hidden' />
          Lorem Ipsum has been the industry's standard dummy text ever.
        </p>
        <div>
          <input type="file" name="" id="upload1" hidden />
          <label className='inline-flex items-center gap-3 px-6 sm:px-8 py-2 sm:py-3 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700' htmlFor="upload1">
            <img width={20} src={assets.upload_btn_icon} alt="Upload Icon" />
            <p className='text-white text-xs sm:text-sm'>Upload your Image</p>
          </label>
        </div>
      </div>

      {/* Right side */}
      <div className="w-full max-w-md">
        <img src={assets.header_img} alt="Sample" className="w-40 sm:w-52 lg:w-64 2xl:w-80" />
      </div>
    </div>
  )
}

export default Header
