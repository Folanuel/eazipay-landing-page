import React from 'react'
import Eazipay from '../assets/eazipay.jpg'

export const Navbar = () => {
    return (
        <nav className="bg-white py-4 px-[130px] pb-10 flex justify-between items-center">
        {/* Logo and Headings */}
        <div className="flex items-center">            
            <img src={Eazipay} alt='logo' className='mr-4' />
            <ul className="flex space-x-7 text-black">
            <li className="hover:text-gray-300 cursor-pointer">Individual</li>
            <li className="hover:text-gray-300 cursor-pointer">Business</li>
            <li className="hover:text-gray-300 cursor-pointer">Pricing</li>
            <li className="hover:text-gray-300 cursor-pointer">Set your payroll</li>
            </ul>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
            <button className="bg-white text-black border border-black hover:bg-blue-100 px-10 py-2 rounded-full focus:outline-none">Login</button>
            <button className="bg-[#11453B] text-white hover:bg-green-600 px-10 py-2 rounded-full focus:outline-none">Register</button>
        </div>
        </nav>
    );
};

export default Navbar;
