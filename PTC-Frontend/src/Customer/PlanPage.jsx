/* eslint-disable no-unused-vars */
import React from 'react';

const PlansPage = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$45',
      duration: '/ 20 days',
      features: [
        { text: '6 videos access', included: true },
        { text: '3 assignments (PR 400)', included: true },
        { text: '1st level benefit 15%', included: true },
        { text: '20,000 PKR with incentive', included: true },
        { text: 'PDF access', included: false },
        { text: '24/7 Priority support', included: false },
      ],
      popular: false,
    },
    {
      name: 'Student Plan',
      price: '$65',
      duration: '/ 80 days',
      features: [
        { text: '12 videos access', included: true },
        { text: '6 PDFs (PR 600)', included: true },
        { text: '1st level benefit 15%', included: true },
        { text: '25,000 PKR with incentive', included: true },
        { text: 'Unlimited store access', included: true },
        { text: '24/7 Priority support', included: false },
      ],
      popular: false,
    },
    {
      name: 'Premium Plan',
      price: '$85',
      duration: '/ Lifetime',
      features: [
        { text: '12 videos access', included: true },
        { text: '8 PDFs (PR 800)', included: true },
        { text: '2nd level benefit 20%', included: true },
        { text: '35,000 PKR with incentive', included: true },
        { text: 'Unlimited store access', included: true },
        { text: '24/7 Priority support', included: true },
      ],
      popular: true,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div>
        <h2 className="text-xl font-bold text-gray-900">Your plan</h2>
        <p className="text-xs text-gray-500 mt-1">
          You don't have an active plan yet. Contact admin to activate one.
        </p>
      </div>

      {/* Plans Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white rounded-3xl p-6 border shadow-sm flex flex-col justify-between relative transition hover:shadow-md ${
              plan.popular ? 'border-[#8257ff] ring-2 ring-[#8257ff]/10' : 'border-gray-100'
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 right-6 bg-[#8257ff] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                Most Popular
              </span>
            )}

            <div>
              {/* Title & Deposit Amount */}
              <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-2">
                DEPOSIT AMOUNT
              </p>

              {/* Price & Duration */}
              <div className="flex items-baseline space-x-1 my-3">
                <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                <span className="text-xs text-gray-400 font-medium">{plan.duration}</span>
              </div>

              {/* Features List */}
              <div className="space-y-3 my-6">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-xs">
                    {feature.included ? (
                      <span className="w-5 h-5 rounded-full bg-purple-50 text-[#8257ff] flex items-center justify-center font-bold text-[10px]">
                        ✓
                      </span>
                    ) : (
                      <span className="w-5 h-5 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center font-bold text-[10px]">
                        ✕
                      </span>
                    )}
                    <span className={feature.included ? 'text-gray-700 font-medium' : 'text-gray-400 line-through'}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Admin Button */}
            <button className="w-full py-3 bg-[#8257ff] hover:bg-[#6f42ec] text-white rounded-xl text-xs font-bold transition shadow-md flex items-center justify-center space-x-2">
              <span>🎧</span>
              <span>Contact Admin</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlansPage;