'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const stats = [
    { value: 500, suffix: 'M+', label: 'Recovered for Clients', prefix: '$' },
    { value: 10000, suffix: '+', label: 'Cases Won' },
    { value: 35, suffix: '+', label: 'Years Experience' },
    { value: 98, suffix: '%', label: 'Success Rate' },
  ];

  return (
    <>
      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes gradient-x {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-100%);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-gradient-x {
          background-size: 200% 100%;
          animation: gradient-x 20s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
      `}</style>

      <main className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-black to-slate-950" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        </div>

        {/* Floating Navigation */}
        <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrollY > 50 ? 'bg-black/90 backdrop-blur-lg shadow-2xl' : ''
        }`}>
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              LAW BROTHERS
            </div>
            <a
              href="tel:1-800-LAW-BROS"
              className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-red-600/50"
            >
              Call Now: 1-800-LAW-BROS
            </a>
          </div>
        </nav>

        {/* Hero Section with Parallax */}
        <section className="relative min-h-screen flex items-center justify-center">
          <div 
            className="absolute inset-0 z-0"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
          </div>
          
          <div className="container mx-auto px-4 z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="animate-fade-in-up">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent animate-gradient">
                    Injured in a
                  </span>
                  <br />
                  <span className="text-red-500 animate-pulse-slow">Car Accident?</span>
                </h1>
              </div>
              
              <div className="animate-fade-in-up animation-delay-200">
                <p className="text-xl md:text-3xl mb-8 text-gray-300 font-light">
                  Get the Compensation You Deserve.{' '}
                  <span className="text-red-400 font-semibold">No Win, No Fee.</span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-400">
                <button
                  onClick={() => setShowForm(true)}
                  className="group relative bg-red-600 text-white font-bold py-5 px-10 rounded-full text-lg overflow-hidden transition-all transform hover:scale-105 shadow-2xl hover:shadow-red-600/50"
                >
                  <span className="relative z-10">Get Free Case Review</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </button>
                
                <a
                  href="tel:1-800-LAW-BROS"
                  className="group relative border-2 border-red-500 text-white font-bold py-5 px-10 rounded-full text-lg overflow-hidden transition-all hover:border-red-400 hover:shadow-2xl hover:shadow-red-500/30"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Call Now: 1-800-LAW-BROS
                  </span>
                  <div className="absolute inset-0 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm animate-fade-in-up animation-delay-600">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Available 24/7
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Free Consultation
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Hablamos Español
                </span>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Animated Stats Section */}
        <section className="relative py-20 bg-gradient-to-b from-black to-slate-950">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  id={`stat-${idx}`}
                  className="animate-on-scroll text-center group"
                  style={{
                    opacity: isVisible[`stat-${idx}`] ? 1 : 0,
                    transform: isVisible[`stat-${idx}`] ? 'translateY(0)' : 'translateY(50px)',
                    transition: `all 0.8s ease-out ${idx * 0.1}s`,
                  }}
                >
                  <div className="relative">
                    <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                      {isVisible[`stat-${idx}`] && (
                        <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                      )}
                    </h3>
                    <p className="text-gray-400 mt-2 group-hover:text-white transition-colors">
                      {stat.label}
                    </p>
                    <div className="absolute -inset-4 bg-red-600/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid with 3D Cards */}
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div
              id="services-title"
              className="animate-on-scroll text-center mb-16"
              style={{
                opacity: isVisible['services-title'] ? 1 : 0,
                transform: isVisible['services-title'] ? 'translateY(0)' : 'translateY(50px)',
                transition: 'all 0.8s ease-out',
              }}
            >
              <h2 className="text-4xl md:text-6xl font-black mb-4">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  We Handle All Types of
                </span>
                <br />
                <span className="text-red-500">Motor Vehicle Accidents</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Car Accidents', icon: '🚗', desc: 'Rear-end collisions, head-on crashes, and multi-vehicle accidents', color: 'from-red-600 to-red-700' },
                { title: 'Truck Accidents', icon: '🚛', desc: 'Commercial truck and 18-wheeler accident claims', color: 'from-orange-600 to-red-600' },
                { title: 'Motorcycle Accidents', icon: '🏍️', desc: 'Protecting riders\' rights after serious injuries', color: 'from-red-700 to-red-800' },
                { title: 'Pedestrian Accidents', icon: '🚶', desc: 'Hit-and-run and crosswalk accident cases', color: 'from-purple-600 to-red-600' },
                { title: 'Uber/Lyft Accidents', icon: '🚕', desc: 'Rideshare accident claims and insurance disputes', color: 'from-blue-600 to-red-600' },
                { title: 'DUI Accidents', icon: '🚨', desc: 'Holding drunk drivers accountable', color: 'from-red-800 to-red-900' },
              ].map((service, idx) => (
                <div
                  key={idx}
                  id={`service-${idx}`}
                  className="animate-on-scroll group"
                  style={{
                    opacity: isVisible[`service-${idx}`] ? 1 : 0,
                    transform: isVisible[`service-${idx}`] ? 'translateY(0) rotateX(0)' : 'translateY(50px) rotateX(-10deg)',
                    transition: `all 0.8s ease-out ${idx * 0.1}s`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/20">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl -z-10 blur-xl`} />
                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-red-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us - Animated Timeline */}
        <section className="relative py-20 bg-gradient-to-b from-slate-950 to-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-6xl font-black text-center mb-16">
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Why Choose Law Brothers?
              </span>
            </h2>

            <div className="max-w-4xl mx-auto">
              {[
                { title: 'No Win, No Fee Guarantee', desc: 'You don\'t pay unless we win your case. We cover all upfront costs.', icon: '💰' },
                { title: 'Maximum Compensation', desc: 'We fight for medical bills, lost wages, pain & suffering, and more.', icon: '💎' },
                { title: 'Fast Results', desc: 'Most cases settle within 6-12 months. We work quickly to get you paid.', icon: '⚡' },
                { title: 'Insurance Experts', desc: 'We know how to deal with insurance companies and their tactics.', icon: '🛡️' },
                { title: 'Medical Network', desc: 'Access to top doctors who work on a lien basis - no upfront costs.', icon: '🏥' },
                { title: '24/7 Availability', desc: 'Accidents don\'t wait. Neither do we. Call anytime, day or night.', icon: '🌟' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  id={`why-${idx}`}
                  className="animate-on-scroll flex gap-6 mb-8"
                  style={{
                    opacity: isVisible[`why-${idx}`] ? 1 : 0,
                    transform: isVisible[`why-${idx}`] ? 'translateX(0)' : 'translateX(-50px)',
                    transition: `all 0.8s ease-out ${idx * 0.1}s`,
                  }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center text-2xl shadow-lg shadow-red-600/50">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <section className="relative py-20 bg-gradient-to-b from-black to-slate-950">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-6xl font-black text-center mb-16">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Real Results for Real People
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { name: 'Maria S.', amount: '$250,000', text: 'After my accident, I didn\'t know where to turn. Law Brothers handled everything and got me a settlement I never expected.', rating: 5 },
                { name: 'James T.', amount: '$180,000', text: 'The insurance company offered me $10,000. Law Brothers got me $180,000. I\'m so grateful for their help.', rating: 5 },
                { name: 'Sarah L.', amount: '$425,000', text: 'Professional, caring, and aggressive when needed. They fought for me every step of the way.', rating: 5 },
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  id={`testimonial-${idx}`}
                  className="animate-on-scroll"
                  style={{
                    opacity: isVisible[`testimonial-${idx}`] ? 1 : 0,
                    transform: isVisible[`testimonial-${idx}`] ? 'scale(1)' : 'scale(0.9)',
                    transition: `all 0.8s ease-out ${idx * 0.1}s`,
                  }}
                >
                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-red-500 transition-all hover:shadow-2xl hover:shadow-red-500/20">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-500 text-xl animate-pulse-slow" style={{ animationDelay: `${i * 0.1}s` }}>
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 italic text-lg">&quot;{testimonial.text}&quot;</p>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-bold text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">Verified Client</div>
                      </div>
                      <div className="text-2xl font-black text-green-500 animate-pulse-slow">
                        {testimonial.amount}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA with Video Background Effect */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-red-900 animate-gradient-x" />
          <div className="absolute inset-0 bg-black/50" />
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-6 animate-fade-in-up">
              Don&apos;t Wait - Evidence Disappears Fast
            </h2>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              The sooner you call, the stronger your case. Get your free consultation now.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-400">
              <button
                onClick={() => setShowForm(true)}
                className="group relative bg-white text-red-600 font-bold py-5 px-10 rounded-full text-lg overflow-hidden transition-all transform hover:scale-105 shadow-2xl"
              >
                <span className="relative z-10">Start Your Free Case Review</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>
              
              <a
                href="tel:1-800-LAW-BROS"
                className="group relative border-2 border-white text-white font-bold py-5 px-10 rounded-full text-lg overflow-hidden transition-all hover:shadow-2xl hover:shadow-white/30"
              >
                <span className="relative z-10">Call: 1-800-LAW-BROS</span>
                <div className="absolute inset-0 bg-white text-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            </div>

            {/* Urgency Indicators */}
            <div className="mt-12 flex justify-center gap-8 animate-fade-in-up animation-delay-600">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span>Live Agents Available Now</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
                <span>147 People Viewing</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative bg-black border-t border-slate-800 py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div>
                <h3 className="text-3xl font-black bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-4">
                  LAW BROTHERS
                </h3>
                <p className="text-gray-400">Fighting for accident victims since 1988</p>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-red-500">Contact</h4>
                <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">1-800-LAW-BROS</p>
                <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">info@lawbrothers.com</p>
                <p className="text-gray-400">Available 24/7</p>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-red-500">Offices</h4>
                <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">Los Angeles</p>
                <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">San Francisco</p>
                <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">San Diego</p>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-red-500">Free Consultation</h4>
                <p className="text-gray-400">No fees unless we win</p>
                <p className="text-gray-400">Hablamos Español</p>
                <div className="mt-4 flex gap-4">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer">
                    <span>f</span>
                  </div>
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer">
                    <span>t</span>
                  </div>
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer">
                    <span>in</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-8 border-t border-slate-800 text-center text-gray-500">
              <p>&copy; 2024 Law Brothers. All rights reserved. | Attorney Advertising</p>
            </div>
          </div>
        </footer>

        {/* Modal Form with Glassmorphism */}
        {showForm && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl max-w-md w-full p-8 relative border border-slate-700 shadow-2xl animate-scale-in">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-2xl"
              >
                ✕
              </button>
              
              <h3 className="text-3xl font-black mb-2 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Get Your Free Case Review
              </h3>
              <p className="text-gray-400 mb-6">Fill out the form below or call us now</p>
              
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-4 bg-black/50 border border-slate-700 rounded-xl focus:outline-none focus:border-red-500 text-white placeholder-gray-500 transition-all"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-4 bg-black/50 border border-slate-700 rounded-xl focus:outline-none focus:border-red-500 text-white placeholder-gray-500 transition-all"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 bg-black/50 border border-slate-700 rounded-xl focus:outline-none focus:border-red-500 text-white placeholder-gray-500 transition-all"
                />
                <textarea
                  placeholder="Tell us about your accident..."
                  rows={4}
                  className="w-full p-4 bg-black/50 border border-slate-700 rounded-xl focus:outline-none focus:border-red-500 text-white placeholder-gray-500 transition-all resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-red-600/50"
                >
                  Get My Free Consultation
                </button>
                <p className="text-sm text-gray-500 text-center">
                  By submitting, you agree to our privacy policy. We&apos;ll contact you within 24 hours.
                </p>
              </form>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

// CountUp Component
function CountUp({ end, duration = 2000, prefix = '', suffix = '' }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <>{prefix}{count.toLocaleString()}{suffix}</>;
}