import React, { useState } from 'react';

const Form = () => {
    const [isIndividual, setIsIndividual] = useState(true);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleButtonClick = (isIndividual) => {
        setIsIndividual(isIndividual);
    };

    const handleRequestDemo = () => {
        // Perform the action when the "Request Demo" button is clicked
        // For example, you can submit the form data to a server
        // and handle the demo request logic here.
    };

    return (
        <div className="max-w-md mx-auto p-6 border rounded-3xl shadow-lg">
        <h2 className="text-2xl text-[#11453B] text-center font-bold mb-4">First things first</h2>
        <p className='text-center pb-6'>We want to serve you better. Tell us a bit about yourself or company</p>
        <div className="flex mb-4 p-2 border border-[#11453B] rounded-xl items-center justify-between">
            <button
            className={`rounded-xl px-14 py-2 ${
                isIndividual ? 'bg-[#11453B] text-white' : 'bg-gray-300'
            }`}
            onClick={() => handleButtonClick(true)}
            >
            Individual
            </button>
            <button
            className={`rounded-xl px-14 py-2 ${
                !isIndividual ? 'bg-[#11453B] text-white' : 'bg-gray-300'
            }`}
            onClick={() => handleButtonClick(false)}
            >
            Company
            </button>
        </div>
        <div className="mb-4">
            <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#11453B]"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            />
        </div>
        <div className="mb-4">
            <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#11453B]"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            />
        </div>
        <div className="mb-4">
            <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#11453B]"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className="mb-4">
            <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#11453B]"
            placeholder="Job Title"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className="mb-4">
            <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#11453B]"
            placeholder="Company Size"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <button
            className="w-full bg-[#11453B] text-white rounded-full py-2 font-semibold hover:bg-green-600"
            onClick={handleRequestDemo}
        >
            Request Demo
        </button>
        </div>
    );
};

export default Form;
