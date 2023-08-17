import React from 'react'
import Form from './Form'

const Registeration = () => {
    return (
        <div className='bg-white py-4 px-[130px] mt-20 flex justify-between items-center space-x-4'>
        <div className='pt-10'>
            <h1 className='text-centre text-[#11453B] text-[50px] font-bold'>Get an Exclusive </h1>
            <h1 className='text-centre text-[#11453B] text-[50px] font-bold'>Demo of Eazipay</h1>
            <p className='text-centre text-[20px] pt-6'>Our greatest priority is to put you and your business</p>
            <p className='text-centre text-[20px]'>first. Let’s show you how we can help.</p>
        </div>
        <div>
            <Form />
        </div>        
        </div>
    )
}

export default Registeration