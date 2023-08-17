import React from 'react'
import Eazipay from '../assets/eazipay.jpg'
import Ig from '../assets/InstagramIG.png'
import X from '../assets/TwitterTwitter.png'
import Meta from '../assets/Frame 48096462facebook.png'
import In from '../assets/Frame 48096461linkedin.png'
import { BsSend } from 'react-icons/bs'


const Footer = () => {
    return (
        <div>
        <div className="h-[0.1px] w-full bg-black mt-10"></div>
        <div className='py-4 px-[130px] pt-10 flex items-center space-x-28'>
            <div className='space-y-5'>
                <img src={Eazipay} alt='logo' className='' />
                <p>Copyright © 2023 Eazipay.</p>
                <p>All rights reserved</p>
                <div className='flex'>
                <img src={Ig} alt='instagram' className='' />
                <img src={X} alt='twitter' className='' />
                <img src={Meta} alt='facebook' className='' />
                <img src={In} alt='linkedin' className='' />
                </div>
            </div>
            <div className='flex flex-row space-x-20 '>
                <div className='space-y-4'>
                <h1 className='text-xl font-bold pb-5'>Product</h1>
                <h2>Individual</h2>
                <h2>Businesses</h2>
                <h2>Request Demo</h2>
                <h2>Pricing</h2>
            </div>
            <div className='space-y-4'>
                <h1 className='text-xl font-bold pb-5'>Legal</h1>
                <h2 >Privacy Policy</h2>
                <h2>Time of service</h2>                
            </div>
            <div className='space-y-4'>
                <h1 className='text-xl font-bold pb-5'>Resources</h1>
                <h2>FAQS</h2>
                <h2>Blog</h2>
                <h2>Career</h2>
                <h2>Customer Stories</h2>
            </div>
            <div className='space-y-4'>
                <h1 className='text-xl font-bold pb-5'>Contact Us</h1>
                <h2 className=''>eazipay@gmail.com</h2>
                <h2>+234 816 878 9518</h2>
                <div className="flex items-center rounded-full py-2 px-4 border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 outline-none">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className='border-none focus:outline-none'
                />
                <BsSend className='hover:rotate-45'/>
            </div>

                
            </div>
            </div>
            
            
        </div>

        </div>
    )
}

export default Footer