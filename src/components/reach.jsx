import React from 'react'
import Apple from '../assets/Frame 48096244.svg'
import Google from '../assets/Frame 48096246.svg'
import Pic from '../assets/Frame 48096442.png'


const Reach = () => {
    return (
        <div className='bg-[#FFE9E7] py-4 px-[130px] mt-20 flex justify-between items-center space-x-4 '>
            <div className='pt-20'>
                <h1 className='text-[45px] font-bold'>Free forever for your  </h1>
                <h1 className='text-[#EA4E4B] text-[45px]'>salary payments</h1>                
                <p className='pt-11 text-[20px]'>Subscribe to the Eazilife today</p>  
                <div className='flex items-center'>
                <img src={Google} alt='playstore' className='w-[200px] ml-[-35px] cursor-pointer'/>
                <img src={Apple} alt='appstore' className='w-[200px]  ml-[-58px] cursor-pointer' />
                </div>
            </div>
            <div className='bg-transparent pt-6 rounded-3xl '>
            <img src={Pic} alt='guy' className='' />
            </div>
        </div>
    )
}

export default Reach