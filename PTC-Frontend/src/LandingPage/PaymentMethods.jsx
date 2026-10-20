<<<<<<< HEAD
/* eslint-disable no-unused-vars */
import React from 'react';

const PaymentMethods = () => {
  // Payment methods list with placeholder SVGs & styling
  const paymentMethods = [
    { name: 'NayaPay', type: 'text', label: 'NayaPay' },
    { name: 'SadaPay', type: 'text', label: 'SADAPAY' },
    { name: 'JazzCash', type: 'text', label: 'JazzCash' },
    { name: 'Easypaisa', type: 'text', label: 'easypaisa' },
    { name: 'VISA', type: 'visa' },
    { name: 'MasterCard', type: 'mastercard' },
    { name: 'Bank Transfer', type: 'bank', label: 'Bank Transfer' },
  ];

  return (
    <section className="w-full bg-[#f8f9fa] py-10 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Section Heading */}
        <p className="text-xs font-bold text-gray-500 tracking-[0.2em] uppercase mb-8">
          Trusted Payment Methods
        </p>

        {/* Payment Logos Container */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
          
          {/* NayaPay */}
          <div className="flex items-center space-x-1.5 font-bold text-gray-700 text-lg tracking-tight">
            <div className="w-7 h-7 rounded-full bg-gray-400 text-white flex items-center justify-center font-black text-xs">
              N
            </div>
            <span>NayaPay</span>
          </div>

          {/* SadaPay */}
          <div className="flex items-center space-x-1 font-semibold text-gray-700 text-lg tracking-widest uppercase">
            <span className="text-xl font-black">S</span>
            <span>SadaPay</span>
          </div>

          {/* JazzCash */}
          <div className="flex items-center space-x-1 font-bold text-gray-800 text-lg">
            <span className="bg-gray-800 text-white px-1.5 py-0.5 rounded text-xs font-black">JC</span>
            <span>JazzCash</span>
          </div>

          {/* Easypaisa */}
          <div className="flex items-center space-x-1.5 font-bold text-gray-700 text-lg lowercase">
            <div className="w-6 h-6 border-2 border-gray-700 rounded-full flex items-center justify-center font-extrabold text-xs">
              e
            </div>
            <span>easypaisa</span>
          </div>

          {/* VISA */}
          <div className="font-extrabold italic text-2xl tracking-tighter text-gray-800 px-2">
            VISA
          </div>

          {/* MasterCard */}
          <div className="flex items-center space-x-1">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-gray-600 opacity-80"></div>
              <div className="w-6 h-6 rounded-full bg-gray-400 opacity-80"></div>
            </div>
            <span className="text-xs font-bold text-gray-700 tracking-tighter">mastercard</span>
          </div>

          {/* Bank Transfer */}
          <div className="flex items-center space-x-2 text-gray-600 font-medium text-sm">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M7 15h1m4 0h1m4 0h1M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>Bank Transfer</span>
          </div>

        </div>

      </div>
    </section>
  );
};

=======
/* eslint-disable no-unused-vars */
import React from 'react';

const PaymentMethods = () => {
  // Payment methods list with placeholder SVGs & styling
  const paymentMethods = [
    { name: 'NayaPay', type: 'text', label: 'NayaPay' },
    { name: 'SadaPay', type: 'text', label: 'SADAPAY' },
    { name: 'JazzCash', type: 'text', label: 'JazzCash' },
    { name: 'Easypaisa', type: 'text', label: 'easypaisa' },
    { name: 'VISA', type: 'visa' },
    { name: 'MasterCard', type: 'mastercard' },
    { name: 'Bank Transfer', type: 'bank', label: 'Bank Transfer' },
  ];

  return (
    <section className="w-full bg-[#f8f9fa] py-10 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Section Heading */}
        <p className="text-xs font-bold text-gray-500 tracking-[0.2em] uppercase mb-8">
          Trusted Payment Methods
        </p>

        {/* Payment Logos Container */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
          
          {/* NayaPay */}
          <div className="flex items-center space-x-1.5 font-bold text-gray-700 text-lg tracking-tight">
            <div className="w-7 h-7 rounded-full bg-gray-400 text-white flex items-center justify-center font-black text-xs">
              N
            </div>
            <span>NayaPay</span>
          </div>

          {/* SadaPay */}
          <div className="flex items-center space-x-1 font-semibold text-gray-700 text-lg tracking-widest uppercase">
            <span className="text-xl font-black">S</span>
            <span>SadaPay</span>
          </div>

          {/* JazzCash */}
          <div className="flex items-center space-x-1 font-bold text-gray-800 text-lg">
            <span className="bg-gray-800 text-white px-1.5 py-0.5 rounded text-xs font-black">JC</span>
            <span>JazzCash</span>
          </div>

          {/* Easypaisa */}
          <div className="flex items-center space-x-1.5 font-bold text-gray-700 text-lg lowercase">
            <div className="w-6 h-6 border-2 border-gray-700 rounded-full flex items-center justify-center font-extrabold text-xs">
              e
            </div>
            <span>easypaisa</span>
          </div>

          {/* VISA */}
          <div className="font-extrabold italic text-2xl tracking-tighter text-gray-800 px-2">
            VISA
          </div>

          {/* MasterCard */}
          <div className="flex items-center space-x-1">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-gray-600 opacity-80"></div>
              <div className="w-6 h-6 rounded-full bg-gray-400 opacity-80"></div>
            </div>
            <span className="text-xs font-bold text-gray-700 tracking-tighter">mastercard</span>
          </div>

          {/* Bank Transfer */}
          <div className="flex items-center space-x-2 text-gray-600 font-medium text-sm">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M7 15h1m4 0h1m4 0h1M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>Bank Transfer</span>
          </div>

        </div>

      </div>
    </section>
  );
};

>>>>>>> f77442eb0f987ea25bd6616b52935ef79ea34515
export default PaymentMethods;