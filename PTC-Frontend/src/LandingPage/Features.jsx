<<<<<<< HEAD
/* eslint-disable no-unused-vars */
import React from 'react';

const Features = () => {
  const featuresList = [
    {
      title: 'Secure Platform',
      description: 'Bank-grade encryption, SOC 2 controls, and privacy-first architecture by default.',
      iconBg: 'bg-purple-100 text-purple-600',
      cardBg: 'from-purple-50/50 via-white to-white',
      borderAccent: 'hover:border-purple-300',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Fast Payouts',
      description: 'Move money in minutes, not days. Instant transfers to 40+ countries.',
      iconBg: 'bg-lime-100 text-gray-900',
      cardBg: 'from-lime-50/50 via-white to-white',
      borderAccent: 'border-purple-300 shadow-sm',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Premium Dashboard',
      description: 'A dashboard your team will actually love — clear, fast, and thoughtful.',
      iconBg: 'bg-yellow-100 text-gray-900',
      cardBg: 'from-amber-50/50 via-white to-white',
      borderAccent: 'hover:border-purple-300',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    },
    {
      title: 'Video Rewards',
      description: 'Monetize your content library with built-in rewards, tips, and unlocks.',
      iconBg: 'bg-purple-100 text-purple-600',
      cardBg: 'from-purple-50/50 via-white to-white',
      borderAccent: 'hover:border-purple-300',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'No Referral Program',
      description: 'Earn your Own',
      iconBg: 'bg-lime-100 text-gray-900',
      cardBg: 'from-lime-50/50 via-white to-white',
      borderAccent: 'hover:border-purple-300',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Analytics',
      description: 'Real-time insights that turn signal into action. No spreadsheets required.',
      iconBg: 'bg-yellow-100 text-gray-900',
      cardBg: 'from-amber-50/50 via-white to-white',
      borderAccent: 'hover:border-purple-300',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  return (
    <section id="features" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-xs font-semibold tracking-wide uppercase border border-purple-100 mb-4">
            • FEATURES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
            Everything you need to grow — <br />
            nothing you don't.
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Purpose-built for modern teams. Powerful under the hood, minimal on the surface.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresList.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border border-gray-100 bg-gradient-to-br ${item.cardBg} transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${item.borderAccent} flex flex-col justify-between`}
            >
              <div>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${item.iconBg}`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>
              <a
                href="#"
                className="text-xs font-medium text-purple-600 hover:text-purple-700 flex items-center space-x-1 group"
              >
                <span>Learn more</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

=======
/* eslint-disable no-unused-vars */
import React from 'react';

const Features = () => {
  const featuresList = [
    {
      title: 'Secure Platform',
      description: 'Bank-grade encryption, SOC 2 controls, and privacy-first architecture by default.',
      iconBg: 'bg-purple-100 text-purple-600',
      cardBg: 'from-purple-50/50 via-white to-white',
      borderAccent: 'hover:border-purple-300',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Fast Payouts',
      description: 'Move money in minutes, not days. Instant transfers to 40+ countries.',
      iconBg: 'bg-lime-100 text-gray-900',
      cardBg: 'from-lime-50/50 via-white to-white',
      borderAccent: 'border-purple-300 shadow-sm',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Premium Dashboard',
      description: 'A dashboard your team will actually love — clear, fast, and thoughtful.',
      iconBg: 'bg-yellow-100 text-gray-900',
      cardBg: 'from-amber-50/50 via-white to-white',
      borderAccent: 'hover:border-purple-300',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    },
    {
      title: 'Video Rewards',
      description: 'Monetize your content library with built-in rewards, tips, and unlocks.',
      iconBg: 'bg-purple-100 text-purple-600',
      cardBg: 'from-purple-50/50 via-white to-white',
      borderAccent: 'hover:border-purple-300',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Referral Program',
      description: 'Grow with your community. Powerful referral tracking and shareable links.',
      iconBg: 'bg-lime-100 text-gray-900',
      cardBg: 'from-lime-50/50 via-white to-white',
      borderAccent: 'hover:border-purple-300',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Analytics',
      description: 'Real-time insights that turn signal into action. No spreadsheets required.',
      iconBg: 'bg-yellow-100 text-gray-900',
      cardBg: 'from-amber-50/50 via-white to-white',
      borderAccent: 'hover:border-purple-300',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  return (
    <section id="features" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-xs font-semibold tracking-wide uppercase border border-purple-100 mb-4">
            • FEATURES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
            Everything you need to grow — <br />
            nothing you don't.
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Purpose-built for modern teams. Powerful under the hood, minimal on the surface.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresList.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border border-gray-100 bg-gradient-to-br ${item.cardBg} transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${item.borderAccent} flex flex-col justify-between`}
            >
              <div>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${item.iconBg}`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>
              <a
                href="#"
                className="text-xs font-medium text-purple-600 hover:text-purple-700 flex items-center space-x-1 group"
              >
                <span>Learn more</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

>>>>>>> f77442eb0f987ea25bd6616b52935ef79ea34515
export default Features;