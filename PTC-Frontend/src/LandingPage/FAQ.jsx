<<<<<<< HEAD
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const FAQ = () => {
  // Pehle question ko by default open (index 0) rakha hai
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Can I switch plans later?",
      answer: "Yes, you can upgrade, downgrade, or cancel your subscription at any time directly from your dashboard settings."
    },
    {
      question: "Is SeMarketing secure?",
      answer: "Absolutely. We use bank-grade encryption, SOC 2 compliant protocols, and strict privacy-first standards to keep your data safe."
    },
    {
      question: "Do you offer discounts for non-profits?",
      answer: "Yes, we offer special pricing and discounts for verified non-profit organizations and educational institutions."
    },
    {
      question: "What payment methods are supported?",
      answer: "We support major credit/debit cards (VISA, MasterCard), Bank Transfers, and local digital wallets like NayaPay, SadaPay, JazzCash, and Easypaisa."
    },
    {
      question: "Can I export my data?",
      answer: "Yes, you can export your analytics, financial reports, and user data in CSV or JSON formats at any time."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Section Pill Badge */}
        <span className="inline-block px-3.5 py-1 bg-purple-50 text-[#8257ff] rounded-full text-xs font-bold tracking-widest uppercase border border-purple-100 mb-4">
          • FAQ
        </span>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-12">
          Frequently asked questions.
        </h2>

        {/* FAQ Accordion Box Container */}
        <div className="max-w-2xl mx-auto border border-gray-200/80 rounded-3xl bg-white shadow-sm overflow-hidden text-left divide-y divide-gray-100">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="transition-colors duration-200">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-[#8257ff] transition-colors pr-4">
                    {faq.question}
                  </span>
                  
                  {/* Plus / Close Icon Circle */}
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-200 flex-shrink-0 ${
                      isOpen
                        ? 'bg-purple-100 text-[#8257ff] rotate-0'
                        : 'bg-purple-50 text-[#8257ff] hover:bg-purple-100'
                    }`}
                  >
                    {isOpen ? '✕' : '＋'}
                  </span>
                </button>

                {/* Collapsible Answer Content */}
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-500 leading-relaxed transition-all">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

=======
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const FAQ = () => {
  // Pehle question ko by default open (index 0) rakha hai
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Can I switch plans later?",
      answer: "Yes, you can upgrade, downgrade, or cancel your subscription at any time directly from your dashboard settings."
    },
    {
      question: "Is SeMarketing secure?",
      answer: "Absolutely. We use bank-grade encryption, SOC 2 compliant protocols, and strict privacy-first standards to keep your data safe."
    },
    {
      question: "Do you offer discounts for non-profits?",
      answer: "Yes, we offer special pricing and discounts for verified non-profit organizations and educational institutions."
    },
    {
      question: "What payment methods are supported?",
      answer: "We support major credit/debit cards (VISA, MasterCard), Bank Transfers, and local digital wallets like NayaPay, SadaPay, JazzCash, and Easypaisa."
    },
    {
      question: "Can I export my data?",
      answer: "Yes, you can export your analytics, financial reports, and user data in CSV or JSON formats at any time."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Section Pill Badge */}
        <span className="inline-block px-3.5 py-1 bg-purple-50 text-[#8257ff] rounded-full text-xs font-bold tracking-widest uppercase border border-purple-100 mb-4">
          • FAQ
        </span>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-12">
          Frequently asked questions.
        </h2>

        {/* FAQ Accordion Box Container */}
        <div className="max-w-2xl mx-auto border border-gray-200/80 rounded-3xl bg-white shadow-sm overflow-hidden text-left divide-y divide-gray-100">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="transition-colors duration-200">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-[#8257ff] transition-colors pr-4">
                    {faq.question}
                  </span>
                  
                  {/* Plus / Close Icon Circle */}
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-200 flex-shrink-0 ${
                      isOpen
                        ? 'bg-purple-100 text-[#8257ff] rotate-0'
                        : 'bg-purple-50 text-[#8257ff] hover:bg-purple-100'
                    }`}
                  >
                    {isOpen ? '✕' : '＋'}
                  </span>
                </button>

                {/* Collapsible Answer Content */}
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-500 leading-relaxed transition-all">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

>>>>>>> f77442eb0f987ea25bd6616b52935ef79ea34515
export default FAQ;