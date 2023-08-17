import React from 'react'
import Apple from '../assets/Frame 48096244.svg'
import Google from '../assets/Frame 48096246.svg'
import Dashboard from '../assets/DASHBOARD.jpg'
import Payroll from '../assets/Frame 48096250.png'
import Business from '../assets/Frame 48096240.png'
import Bolade from '../assets/Payroll List 2 Fill.png'

const Main = () => {
    return (
        <div className='bg-white py-4 px-[130px]  flex space-x-4 justify-between items-center'>
            <div className='pt-7'>
                <h1 className='text-[60px] font-bold'>Run your <span className='text-[#11453B]'>payroll</span> <span className='text-[#B4A572]'>easily</span> in <span className='text-[#EA4E4B]'>seconds</span></h1>
                <p className='text-[21px] font-medium pt-6 pb-6'>We've built an all-inclusive simple solution for individual and businesses to manage staff, pay salaries, bills, and relevant taxes all at once.</p>
                <button className="bg-[#11453B] text-white hover:scale-90 px-10 py-2 rounded-full focus:outline-none">Start Using Free,Forever</button>
                <p className='pt-11'>Download the Eazipay App</p>  
                <div className='flex items-center'>
                <img src={Google} alt='playstore' className='w-[200px] ml-[-35px] cursor-pointer'/>
                <img src={Apple} alt='appstore' className='w-[200px]  ml-[-58px] cursor-pointer' />
                </div>
                
            </div>
            <div className=''>
                <div class="w-[500px] h-[500px] bg-[#11453B] rounded-full"></div>
                <img src={Dashboard} alt='' className='absolute top-[200px] left-[800px] w-[450px] h-[400px]' />
                <img src={Payroll} alt='' className='absolute top-[150px] left-[680px] w-[200px] h-[100px]'/>
                <img src={Business} alt='' className='absolute top-[400px] left-[600px] w-[200px] h-[100px]' />
                <img src={Bolade} alt='' className='absolute top-[550px] left-[650px] w-[200px] h-[100px]' />
            </div>
        </div>
    )
}

export default Main