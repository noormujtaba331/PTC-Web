/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import heorimg from "../assets/heroimg.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [faq, setFaq] = useState(null);
  const [copied, setCopied] = useState(false);

  const whatsappNumber = "+92 300 1234567";
  const whatsappLink = "https://wa.me/923001234567";

  const copyNumber = () => {
    navigator.clipboard.writeText(whatsappNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white text-[#0F172A] font-sans overflow-x-clip">
      {/* ===== TOP BAR ===== */}
      <div className="bg-[#0A1220] text-white text-center py-2 text-[13px] px-4">
        <span className="bg-[#00C950] text-[10px] px-2 py-0.5 rounded-full mr-2 font-bold">LIVE</span>
        Over $150,000+ paid out to verified members this month! Join Now →
      </div>

      {/* ===== NAVBAR - FIXED ===== */}
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-10 py-4 border border-white/20 bg-white/5 p-8 shadow-2xl backdrop-blur-3xl rounded-b-4xl backdrop-saturate-100 transition-all duration-500 hover:bg-white/10
            inset-shadow-[0_4px_12px_rgba(255,255,255,0.3)] sticky top-0 bg-white z-50">
        <Link to="/" className="flex gap-2 items-center">
          <div className="w-8 h-8 bg-blue-600 rounded-lg text-white flex items-center justify-center font-bold">SE</div>
          <div className="leading-none">
            <p className="font-bold text-">SE MARKETING</p>
            <p className="text- text-blue-600 font-bold">SOLUTION</p>
          </div>
        </Link>

        <div className="hidden lg:flex gap-6 text- text-gray-600">
          <a href="#about">About Us</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#plans">Plans</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#faq">FAQ</a>
        </div>

        <div className="flex gap-3 items-center">
          <div className="hidden sm:flex gap-3 items-center">
            <Link to="/login" className="text-[14px] font-bold border px-6 rounded-lg py-2">Log In</Link>
            <Link to="/signup" className="bg-blue-600 text-white px-5 py-2 rounded-lg text-[14px] font-bold">Get Started</Link>
          </div>
          <button onClick={()=> setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden w-8 h-8 border rounded-lg flex items-center justify-center">☰</button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b px-6 py-4 space-y-3 text- shadow-sm">
          <a href="#about" className="block py-2">About Us</a>
          <a href="#how-it-works" className="block py-2">How It Works</a>
          <a href="#plans" className="block py-2">Plans</a>
          <a href="#testimonials" className="block py-2">Testimonials</a>
          <a href="#faq" className="block py-2">FAQ</a>
          <div className="pt-2 flex gap-3">
            <Link to="/login" className="flex-1 border text-center py-2 rounded-lg ">Log In</Link>
            <Link to="/signup" className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg">Get Started</Link>
          </div>
        </div>
      )}

      {/* ===== HERO - FULLY FIXED ===== */}
      <section className="relative min-h- bg-[#FBFBFE] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-yellow-100 to-lime-100 blur-3xl opacity-60" />
        </div>
        <div className="relative max-w- mx-auto px-4 sm:px-6 lg:px-10 py-10 lg:py-2 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl font-extrabold leading-[0.9]">
              Unlock your
              <span className="block text-[#8B5CF6]">earning potential</span>
            </h1>
            <p className="mt-6 text-sm lg:text-xl text-gray-500 max-w- mx-auto lg:mx-0 leading-6">
              Se Marketing gives creators, teams, and businesses everything they need to grow revenue — elegant dashboards, instant payouts, and analytics that actually make sense.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link to="/signup" className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#8B5CF6] text-white font-semibold text-center text-">Get Started →</Link>
              <span onClick={() => setShowSupportModal(true)} className="w-full sm:w-auto px-6 py-3 rounded-full bg-white border font-semibold text-center text- cursor-pointer">Advertise With Us</span>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <img src={heorimg} alt="Dashboard" className="w-full max-w- lg:max-w- object-contain mx-auto" />
          </div>
        </div>
      </section>

      {/* ===== LIVE ACTIVITY ===== */}
      <div className="border-y py-2 px-4 flex gap-4 text- overflow-x-auto whitespace-nowrap scrollbar-hide">
        <span className="bg-green-50 text-green-600 border border-green-200 px-3 py-1 rounded-full text- shrink-0">● LIVE ACTIVITY</span>
        <span className="shrink-0">◎ Ahmad A. withdrew $45.00 via Local Bank</span>
        <span className="shrink-0">👑 Sarah K. upgraded to Premium Plan</span>
        <span className="shrink-0">◎ Usman R. completed 12 Daily Videos</span>
        <span className="shrink-0">◎ Fatima M. withdrew $30</span>
      </div>

      {/* ===== WHY CHOOSE ===== */}
      <div id="about" className="py-16 px-4 sm:px-6 lg:px-10 bg-[#F9FBFD] text-center">
        <span className="bg-white border text- px-3 py-1 rounded-full text-gray-500">UNMATCHED CREDIBILITY</span>
        <h2 className="text- sm:text- font-bold mt-3 leading-tight">Why Over 25,000+ Members Choose SE<br className="hidden sm:block"/> Marketing Solution</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10 text-left max-w-6xl mx-auto">
          <div className="bg-white border border-gray-100 p-6 rounded-2xl">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">🛡</div>
            <h4 className="font-bold text- mt-4">100% Transparent</h4>
            <p className="text- text-gray-500 mt-2 leading-5">Real-time balance updates and clear payout reports. No hidden charges.</p>
          </div>
          <div className="bg-white border border-gray-100 p-6 rounded-2xl">
            <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">⚡</div>
            <h4 className="font-bold text- mt-4">Instant Withdrawals</h4>
            <p className="text- text-gray-500 mt-2 leading-5">Request earnings straight to your bank account or local mobile wallet.</p>
          </div>
          <div className="bg-white border border-gray-100 p-6 rounded-2xl">
            <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">🎥</div>
            <h4 className="font-bold text- mt-4">Verified Ad Campaigns</h4>
            <p className="text- text-gray-500 mt-2 leading-5">We partner exclusively with verified international brands and advertisers.</p>
          </div>
          <div className="bg-white border border-gray-100 p-6 rounded-2xl">
            <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">🎧</div>
            <h4 className="font-bold text- mt-4">24/7 Account Managers</h4>
            <p className="text- text-gray-500 mt-2 leading-5">Dedicated human support available around the clock via WhatsApp.</p>
          </div>
        </div>
      </div>

      {/* ===== HOW IT WORKS ===== */}
      <div id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-10 bg-white text-center">
        <span className="bg-[#EFF6FF] border border-blue-100 text-[#2563EB] text- px-4 py-1.5 rounded-full font-bold tracking-widest">SIMPLE WORKFLOW</span>
        <h2 className="text- sm:text- font-extrabold mt-4">How SE Marketing Solution Works</h2>
        <p className="text-gray-500 text- mt-3 max-w-xl mx-auto">Whether you want to earn daily or promote your brand, our system is built for speed, trust and transparency.</p>
        <div className="inline-flex bg-[#F1F5F9] p-1 rounded-full mt-8 text- font-medium">
          <button className="bg-white px-6 py-2 rounded-full shadow-sm text-[#0F172A]">For Earners</button>
          <button className="px-6 py-2 text-gray-500" onClick={() => setShowSupportModal(true)}>For Advertisers</button>
        </div>
        <div className="relative max-w-6xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              { n: 1, t: "Create Free Account", d: "Sign up in under 60 seconds with basic details. No credit card required.", c: "bg-blue-600", i: "👤" },
              { n: 2, t: "Watch & Complete Work", d: "Access personalized dashboard. Watch verified short videos and complete tasks.", c: "bg-blue-600", i: "▶" },
              { n: 3, t: "Withdraw Profits", d: "Transfer earnings directly to your bank or Easypaisa / 【entity-JazzCash¦canonical_name=JazzCash】 instantly.", c: "bg-[#00C950]", i: "💸" },
            ].map((s) => (
              <div key={s.n} className="bg-[#F9FAFB] border border-gray-100 p-7 rounded- hover:shadow-lg transition-all">
                <div className={`w-9 h-9 ${s.c} text-white rounded-full flex items-center justify-center text- font-bold`}>{s.n}</div>
                <div className="w-10 h-10 bg-white border rounded-xl flex items-center justify-center mt-4">{s.i}</div>
                <h4 className="font-bold text- mt-4">{s.t}</h4>
                <p className="text- text-gray-500 mt-2 leading-5">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== PLANS ===== */}
      <div id="plans" className="py-20 px-4 sm:px-6 lg:px-10 bg-[#F9FBFD] text-center">
        <span className="bg-[#E6FFF4] border border-green-100 text-[#00A651] text- px-4 py-1.5 rounded-full font-bold tracking-widest">MEMBERSHIP TIERS</span>
        <h2 className="text- sm:text- md:text- font-extrabold mt-4">Choose Your Plan & Scale Your Daily Income</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto text-left items-stretch">
          <div className="bg-white border border-gray-100 rounded- p-7 flex flex-col hover:shadow-xl transition-all">
            <span className="bg-gray-100 text-gray-600 text- px-3 py-1 rounded-full w-fit font-bold">BASIC TIER</span>
            <h3 className="font-bold text- mt-4">Starter Plan</h3>
            <p className="text- text-gray-500">Expire After 20 Days</p>
            <span className="mt-2 bg-yellow-100 text-yellow-700 text- px-2 py-1 rounded-full w-fit">Show in your Account within 45 min.</span>
            <p className="text- font-extrabold mt-4">$45<span className="text- font-normal text-gray-500"> / 20 days</span></p>
            <div className="mt-6 border-t border-gray-100 pt-5 text- space-y-3">
              <p className="flex gap-2"><span className="text-green-500">✓</span> 6 videos access</p>
              <p className="flex gap-2"><span className="text-green-500">✓</span> 3 Assignment pr 400</p>
              <p className="flex gap-2"><span className="text-green-500">✓</span> 1st Level Benefit 15%</p>
              <p className="flex gap-2"><span className="text-green-500">✓</span> <b>20000 with incentive</b></p>
            </div>
            <Link to="/signup" className="flex items-center justify-center w-full mt-auto p-3 bg-[#F1F5F9] rounded-xl font-semibold text-">Choose Starter</Link>
          </div>

          <div className="bg-[#0F172A] text-white border-2 border-blue-600 rounded- p-7 flex flex-col relative shadow-[0_20px_60px_rgba(37,99,235,0.2)] lg:scale-[1.02]">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-[#00C950] text-white text- px-4 py-1.5 rounded-full font-bold whitespace-nowrap">MOST POPULAR</span>
             <span className="bg-white/10 text- px-3 py-1 rounded-full w-fit mt-2">PREMIUM TIER • LIFETIME</span>
            <h3 className="font-bold text- mt-4">Premium Plan</h3>
            <p className="text- text-gray-500">Lifetime Access</p>
            <span className="mt-2 bg-yellow-500/20 text-yellow-300 text- px-2 py-1 rounded-full w-fit">Show in your Account within 45 min.</span>
            <p className="text- font-extrabold mt-4">$85<span className="text- font-normal text-gray-500"> / Lifetime</span></p>
            <div className="mt-6 border-t border-gray-100 pt-5 text- space-y-3">
              <p className="flex gap-2"><span className="text-green-500">✓</span> 12 Videos Access</p>
              <p className="flex gap-2"><span className="text-green-500">✓</span> 8 PDF pr 800</p>
              <p className="flex gap-2"><span className="text-green-500">✓</span> 2nd Level Benefit 20%</p>
              <p className="flex gap-2"><span className="text-green-500">✓</span> 7/24 Support</p>
              <p className="flex gap-2"><span className="text-green-500">✓</span> <b>35000 with incentive</b></p>
            </div>
            <Link to="/signup" className="flex mt-5 items-center justify-center w-full p-3 bg-gradient-to-r from-blue-600 to-[#00C950] rounded-xl font-bold text-white">Choose Premium</Link>
           
          </div>

          <div className="bg-white border border-gray-100 rounded- p-7 flex flex-col hover:shadow-xl transition-all">
            <span className="bg-gray-100 text-gray-600 text- px-3 py-1 rounded-full w-fit font-bold">STUDENT TIER • 80-DAY ACCESS</span>
            <h3 className="font-bold text- mt-4">Student Plan</h3>
            <p className="text- text-gray-400">Expire After 80 Days</p>
            <span className="mt-2 bg-yellow-100 text-yellow-700 text- px-2 py-1 rounded-full w-fit">Show in your Account within 45 min.</span>
            <p className="text- font-extrabold mt-4">$65<span className="text- font-normal text-gray-400"> / 80 days</span></p>
            <div className="mt-6 border-t border-white/10 pt-5 text- space-y-3">
              <p className="flex gap-2"><span className="text-green-400">◉</span> 12 videos access</p>
              <p className="flex gap-2"><span className="text-green-400">◉</span> 6 PDF pr 600</p>
              <p className="flex gap-2"><span className="text-green-400">◉</span> 1st level Benefits 15%</p>
              <p className="flex gap-2"><span className="text-green-400">◉</span> <b>25000 with incentive</b></p>
            </div>
            <Link to="/signup" className="flex items-center justify-center w-full mt-auto p-3 bg-[#F1F5F9] rounded-xl font-semibold text-">Get Student Access</Link>
          </div>
        </div>
      </div>

      {/* ===== TESTIMONIALS ===== */}
      <div id="testimonials" className="py-16 px-4 sm:px-6 lg:px-10 bg-[#F9FBFD] text-center">
        <span className="bg-blue-50 text-blue-600 text- px-3 py-1 rounded-full">REAL PROOF</span>
        <h2 className="text- sm:text- font-bold mt-3">Trusted By Real Earners Everyday</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 text-left max-w-6xl mx-auto">
          <div className="bg-white border border-gray-100 p-6 rounded-2xl">
            <p className="text-yellow-400 text-xs">★★★★★</p>
            <p className="text- text-gray-600 mt-3 leading-5">"SE Marketing Solution is completely legitimate. I upgraded to Premium Plan and have already withdrawn over $180."</p>
            <div className="flex gap-2 items-center mt-6 border-t border-gray-50 pt-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text- font-bold text-blue-600">AA</div>
              <div><p className="text- font-bold">Ahmad Ali</p><p className="text- text-gray-500">Verified Member • Pakistan</p></div>
            </div>
          </div>
          <div className="bg-white border border-gray-100 p-6 rounded-2xl">
            <p className="text-yellow-400 text-xs">★★★★★</p>
            <p className="text- text-gray-600 mt-3 leading-5">"As an advertiser, finding real traffic without bots is difficult. SE Marketing delivered 10,000+ real views."</p>
            <div className="flex gap-2 items-center mt-6 border-t border-gray-50 pt-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text- font-bold text-green-600">SK</div>
              <div><p className="text- font-bold">【entity-Sarah Khan¦canonical_name=Sarah Khan】</p><p className="text- text-gray-500">Brand Advertiser • UAE</p></div>
            </div>
          </div>
          <div className="bg-white border border-gray-100 p-6 rounded-2xl sm:col-span-2 md:col-span-1">
            <p className="text-yellow-400 text-xs">★★★★★</p>
            <p className="text- text-gray-600 mt-3 leading-5">"Customer support on WhatsApp is super fast. Resolved within minutes."</p>
            <div className="flex gap-2 items-center mt-6 border-t border-gray-50 pt-4">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text- font-bold text-purple-600">UM</div>
              <div><p className="text- font-bold">Usman Malik</p><p className="text- text-gray-500">Pro Plan Member • Pakistan</p></div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== FAQ ===== */}
      <div id="faq" className="py-16 px-4 max-w-3xl mx-auto text-center">
        <span className="bg-blue-50 text-blue-600 text- px-3 py-1 rounded-full">GOT QUESTIONS?</span>
        <h2 className="text- sm:text- font-bold mt-3">Frequently Asked Questions</h2>
        <div className="mt-8 space-y-3 text-left">
          {[
            "How do I get paid and what are the withdrawal options?",
            "How does plan activation work?",
            "Why is CNIC / ID verification required?",
            "Is there a referral bonus program?",
          ].map((q, i) => (
            <div key={i} className="border border-gray-100 rounded-xl p-4 cursor-pointer hover:bg-gray-50" onClick={() => setFaq(faq === i? null : i)}>
              <div className="flex justify-between text- font-medium"><span>{q}</span><span>{faq===i? "∧":"⌄"}</span></div>
              {faq === i && <p className="text- text-gray-500 mt-3 leading-5">Withdraw via local bank or mobile wallet. Plan activates instantly. CNIC required for security.</p>}
            </div>
          ))}
        </div>
      </div>

      {/* ===== FINAL CTA ===== */}
      <div className="bg-gradient-to-r from-[#0A1220] to-[#2563EB] text-white py-16 text-center px-4">
        <h2 className="text- sm:text- font-bold">Ready to Start Earning Daily Income?</h2>
        <p className="text-gray-300 text- mt-2">Join over 25,000 active members today. Sign up in under a minute.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6 max-w- mx-auto">
          <Link to="/signup" className="bg-green-500 px-6 py-3 rounded-xl text- font-semibold text-center">Create Account Now</Link>
          <button onClick={() => setShowSupportModal(true)} className="bg-white/10 border border-white/20 px-6 py-3 rounded-xl text-">Contact WhatsApp Support</button>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <div className="bg-[#080E1F] text-gray-400 py-10 px-4 sm:px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-">
        <div className="sm:col-span-2 md:col-span-1">
          <p className="text-white font-bold flex gap-2 items-center"><span className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-">SE</span> SE Marketing Solution</p>
          <p className="mt-3 leading-5">The premier digital marketing and PTC agency empowering individuals globally.</p>
        </div>
        <div><p className="text-white font-bold">QUICK NAVIGATION</p><p className="mt-3 leading-6"><a href="#about">About Us</a><br/><a href="#how-it-works">How It Works</a><br/><a href="#plans">Plans</a><br/><a href="#testimonials">Testimonials</a><br/><a href="#faq">FAQ</a></p></div>
        <div><p className="text-white font-bold">LEGAL & COMPLIANCE</p><p className="mt-3 leading-6">Terms of Service<br/>Privacy Policy<br/>CNIC Verification Notice<br/>Anti-Fraud Policy</p></div>
        <div><p className="text-white font-bold">DIRECT SUPPORT</p><p className="mt-3 leading-6">support@semarketingsolution.com<br/>+92 310 9189795</p></div>
      </div>

      {/* WhatsApp Modal */}
      {showSupportModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded- p-6 w-full max-w- relative shadow-2xl">
            <button onClick={() => setShowSupportModal(false)} className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">✕</button>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-">💬</div>
            <h3 className="text- font-bold mt-4">Need Help?</h3>
            <p className="text- text-gray-500 mt-2">Contact support on WhatsApp.</p>
            <div className="mt-4 bg-gray-50 border border-gray-100 rounded-xl p-3 flex items-center justify-between">
              <span className="font-bold text-">{whatsappNumber}</span>
              <button onClick={copyNumber} className="text- bg-white border px-3 py-1 rounded-full">{copied? "Copied!" : "Copy"}</button>
            </div>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-4 w-full bg-[#25D366] text-white py-3 rounded-xl text- font-bold flex items-center justify-center">Chat on WhatsApp</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;