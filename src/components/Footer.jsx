import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
        <footer className='flex justify-around pb-8 bg-slate-200 pt-5'>
            <div className='space-y-6'>
                <h1 className='font-bold text-4xl'>Blog</h1>
                <p>iste odit quam ratione? Ullam adipisci deserunt <br/>similique nemo alias exercitationem at ipsa ut laborum.</p>
                <div className='flex mt-20'>
                    <FaInstagram/>
                    <CiLinkedin/>
                    <CiFacebook/>
                    <FaWhatsapp/>
                </div>
            </div>
            <div>
                <div className='flex gap-8'>
                    <ul>
                        <li className='font-bold'>Navigate</li>
                        <li>Lorem</li> 
                        <li></li>ipsum 
                        <li></li>dolor 
                        <li></li>sit 
                    </ul>
                    <ul>
                        <li className='font-bold'>About</li>
                        <li>amet</li>
                        <li>ahdkals</li>
                        <li>jdkdhak</li>
                        <li>kflkf</li>
                    </ul>
                </div>
                <div>
                    <p className='mt-5'>golivehq.co | hello@golivehq.co | Privacy Policy | Terms & Conditions</p>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer