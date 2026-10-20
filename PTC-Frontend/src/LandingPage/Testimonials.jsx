/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Payouts land in minutes. Support answers in minutes. It's rare to find a product this considered.",
      name: 'Meerab Rashid',
      role: 'Creator Lead · Aurora',
      avatarBg: 'bg-[#8257ff]',
    },
    {
      id: 2,
      quote: "The interface is super clean and payouts are seamless. It helped us scale our team revenue instantly.",
      name: 'Ali Raza',
      role: 'Founder · TechHub',
      avatarBg: 'bg-indigo-600',
    },
    {
      id: 3,
      quote: "Best digital platform for creators. Everything you need is right on the dashboard.",
      name: 'Sarah Khan',
      role: 'Digital Marketer',
      avatarBg: 'bg-purple-500',
    },
  ];

  const activeTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="bg-[#f8f9fc] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Section Badge */}
        <span className="inline-block px-3.5 py-1 bg-purple-50 text-[#8257ff] rounded-full text-xs font-bold tracking-widest uppercase border border-purple-100 mb-4">
          • TESTIMONIALS
        </span>

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-12">
          Loved by teams that ship.
        </h2>

        {/* Testimonial Card Container */}
        <div className="relative max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100 text-left transition-all duration-300">
          
          {/* Quote Icon Top Left Badge */}
          <div className="absolute -top-4 left-8 w-9 h-9 bg-[#8257ff] rounded-full flex items-center justify-center text-white shadow-md">
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          {/* 5-Star Rating */}
          <div className="flex items-center space-x-1 text-amber-400 mb-4 text-base">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>

          {/* Testimonial Text */}
          <p className="text-gray-800 text-base sm:text-lg font-medium leading-relaxed mb-6">
            “{activeTestimonial.quote}”
          </p>

          {/* User Profile */}
          <div className="flex items-center space-x-3.5">
            <div className={`w-11 h-11 rounded-full ${activeTestimonial.avatarBg} flex items-center justify-center text-white font-bold text-sm shadow-sm`}>
              {activeTestimonial.name.charAt(0)}
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 leading-tight">
                {activeTestimonial.name}
              </h4>
              <p className="text-xs text-gray-500 font-medium mt-0.5">
                {activeTestimonial.role}
              </p>
            </div>
          </div>

        </div>

        {/* Carousel Dots Indicator */}
        <div className="flex items-center justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? 'w-6 h-2 bg-[#8257ff]'
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;