import React from 'react'
import Onboarding from '../assets/onbrdng2.png'

const Functions = () => {
    return (
        <div className='py-4 px-[130px] pt-10'>
        <h1 className='text-[30px] text-[#11453B] text-center font-extrabold'>How Eazipay Works</h1>
        <p className='text-center pt-5 text-lg'>Get started in 3 simple ways</p>
        <div className='flex items-center pt-20'>
            <div className='flex items-center space-y-4'>
                <div className="w-[500px] h-[500px] bg-[#F0F7EB] rounded-full border-black"></div>
                <div className="w-[450px] h-[450px] bg-[#D9EBCD] rounded-full absolute left-[155px]"></div>
                <div className="w-[400px] h-[400px] bg-[#11453B] rounded-full absolute left-[180px]"></div>
                <img src={Onboarding} alt='functionalities' className='h-[580px] w-[300px] absolute left-[230px]'/>                
            </div>
            <div className='pl-[80px]'>
                <h1 className='border border-black bg-[#11453B] text-white text-[20px] font-semibold rounded-md px-4 mb-5 relative left-[-20px]'>1</h1>
                <div className="h-12 w-[0.1px] bg-black pt-10"></div>
                <h1 className='border border-black bg-[#F2F1F1] text-[20px] text-[#11453B] font-semibold mt-5 rounded-md px-4 mb-5 relative left-[-20px]'>2</h1>
                <div className="h-12 w-[0.1px] bg-black pt-10"></div>
                <h1 className='border border-black bg-[#F2F1F1] text-[20px] text-[#11453B] font-semibold mt-5 rounded-md px-4 mb-5 relative left-[-20px]'>3</h1>
                <div className="h-12 w-[0.1px] bg-black pt-10"></div>
                
            </div>
            <div className=''>
                <div className="p-4 rounded-xl ">
                <h2 className="text-black text-2xl  font-semibold mb-2">Create your free account</h2>
                <p className="text-black pt-6 text-justify">Click here to set up your Eazipay account.</p>
                </div>
                <div className="p-4 rounded-xl ">
                <h2 className="text-black text-2xl  font-semibold mb-2">Add Employee Data</h2>
                <p className="text-black pt-6 text-justify">Your employee information is 100% safe and secure.</p>
                </div>
                <div className="p-4 rounded-xl ">
                <h2 className="text-black text-2xl font-semibold mb-2">Prepare your Transaction</h2>
                <p className="text-black pt-6 text-justify">Run payroll: Bulk Salaries and Compliance are done at</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Functions
