import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa6";

const Header = () => {
  return (
    <>
        <header className='flex justify-center items-center h-screen w-full'>
            <div className='w-[50%]  h-full m-3'>
                <img src='https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='profile image' className='border border-solid p-2 rounded-md w-[80%]  h-[90%]'/>
            </div>
            <div  className='w-[50%] m-3  text-center h-full  space-y-14'>
                <div className='  space-y-14'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus labore neque perspiciatis voluptatum harum exercitationem odit est deleniti cupiditate quasi? Laborum quasi maxime error similique nihil, quo repudiandae perspiciatis sapiente.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus labore neque perspiciatis voluptatum harum exercitationem odit est deleniti cupiditate quasi? Laborum quasi maxime error similique nihil, quo repudiandae perspiciatis sapiente.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus labore neque perspiciatis voluptatum harum exercitationem odit est deleniti cupiditate quasi? Laborum quasi maxime error similique nihil, quo repudiandae perspiciatis sapiente.</p>
                </div>
                <div className='text-4xl font-medium flex gap-5 justify-center items-center '>
                    <FaInstagram/>
                    <CiLinkedin/>
                    <CiFacebook/>
                    <FaWhatsapp/>
                </div>
            </div>

        </header>
    </>
  )
}

export default Header