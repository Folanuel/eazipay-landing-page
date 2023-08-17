import React from 'react'

const Features = () => {
    return (
        <div className='items-center py-4 px-[130px]'>
            <h1 className='text-center text-[50px] text-[#11453B] font-bold pt-6  pb-8'>For Individuals and Businesses</h1>
            <p className='text-[25px] text-center pb-8'>Join 200+ businesses using Eazipay's easy solution.</p>
            <div className='flex justify-between items-center'>
                <div className="bg-[#11453B] p-4 rounded-xl shadow-lg  w-[480px] h-[280px] transition-transform hover:-translate-x-36">
                <h2 className="text-white text-2xl text-center font-semibold mb-2">Tamper-proof Payroll for Life</h2>
                <p className="text-white px-[20px] pt-6 text-justify">Your staff payroll history is kept in one place forever. No more Excel sheets or manual records. Download your payroll history anytime you need it.</p>
                </div>
                <div className="bg-[#11453B] p-4 rounded-xl  shadow-lg w-[480px] h-[280px] absolute left-[320px]  transition-transform hover:-translate-x-28">
                <h2 className="text-white text-2xl text-center font-semibold mb-2">All Payroll, Anytime Anywhere</h2>
                <p className="text-white px-[20px] pt-6 text-justify">Wherever you are, Eazipay has got you covered on ALL your Payroll tasks.Whether it is Taxes, Pension insurances HMOs, trustfunds, Eazipay handle all your compliances in one place and easily, in seconds!</p>
                </div>
                <div className="bg-[#11453B] p-4 rounded-xl shadow-lg  w-[480px] h-[280px] absolute left-[680px] transition-transform hover:-translate-x-10">
                <h2 className="text-white text-2xl text-center font-semibold mb-2">Payroll in Seconds</h2>
                <p className="text-white px-[20px] pt-6 text-justify">Never again will you spend more than 2 minutes on payroll. Just click on your staff and bulk-pay them at once. Payment is done permanently.</p>
                </div>
            </div>
            <p className='text-center text-2xl pt-10'>We are happy to answer your queries. Please, reach us at</p> 
            <p className='text-center text-2xl'> <span className='text-[#EA4E4B]'>hi@myeazipay.com</span> and expect our response shortly after. </p>


        </div>
    )
}

export default Features