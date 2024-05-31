import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaFacebook, FaGithub, FaInstagram, FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import { BiLogoGmail } from 'react-icons/bi'

const Footer = () => {
  return (
    <footer className='w-full mb-[100px] pb-10' id='contact'>
    <div className='w-full absolute left-0 -bottom-72
    min-h-96'>
        <img
        src='/footer-grid.svg'
        alt='grid'
        className='w-full h-full opacity-50' 
        />
    </div>

    <div className='flex flex-col items-center'>
     <h1 className='heading lg:max-w-[45vw]'>
        Ready to take <span className='text-purple'>Your </span> digital 
        presence to the next level?
     </h1>
     <p className=' text-white-200  md:mt-10 my-5'>Reach me out</p>
     <a href='dhanushpatali0@gmail.com'>
        <MagicButton 
        title=" Let's get in touch"
        icon={<FaLocationArrow />}
        position="right"
        />
     </a>
     <div className='flex mt-16 md:flex-row flex-col pt-4 lg:flex-col
     justify-between items-center'>
        <p className='md:text-base text-sm
     md:front-normal font-light'>Copyeight © 2024 Dhanush M   </p>
     </div>
     <div className='flex items-center md:gap-3
     gap-6'>
      <div className='w-40 h-10 cursor-pointer flex justify-center items-center
        backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200
        rounded-lg border-black-300  gap-3'>
     <a href='https://www.instagram.com/dhanush._m_/'> 
      <FaInstagram
      size={30} />
     </a>
     <a href='dhanushpatali0@gmail.com'>
     <BiLogoGmail 
     size={30}/>
     </a>
     <a href='https://github.com/'>
     <FaGithub 
     size={30}/>
     </a>
     </div>
     </div>
     </div>

    </footer>
  )
}

export default Footer