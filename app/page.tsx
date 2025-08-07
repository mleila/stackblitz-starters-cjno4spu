'use client';

import React, { useState } from 'react';
import { Phone, Car, Shield, Users, Star, CircleCheck, ArrowRight } from 'lucide-react';

export default function Page() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    caseDescription: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Form handler will be connected to backend later
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">Law Brothers®</div>
            <div className="flex items-center space-x-4">
              <span className="text-sm">Available 24/7 • Hablamos Español</span>
              <a href="tel:8002222222" className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-bold transition-colors flex items-center space-x-2">
                <Phone size={20} />
                <span>(800) 222-2222</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                INJURED IN A
                <span className="text-red-500"> CAR ACCIDENT?</span>
              </h1>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-yellow-400">
                CALL THE LAW BROTHERS!
              </h2>
              <p className="text-xl mb-8 leading-relaxed">
                Over <strong className="text-yellow-400">$500,000,000</strong> recovered for our clients. 
                Award-winning personal injury attorneys fighting for maximum compensation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-4">
                  <CircleCheck className="text-green-400" size={24} />
                  <span className="font-semibold">No Fee Unless You Win</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-4">
                  <Car className="text-blue-400" size={24} />
                  <span className="font-semibold">We'll Come To You</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-4">
                  <Phone className="text-green-400" size={24} />
                  <span className="font-semibold">Free Consultation</span>
                </div>
              </div>
              <a 
                href="tel:8002222222" 
                className="bg-red-600 hover:bg-red-700 text-white text-2xl font-bold py-4 px-8 rounded-lg transition-colors inline-flex items-center space-x-3 shadow-lg"
              >
                <Phone size={28} />
                <span>CALL NOW: (800) 222-2222</span>
              </a>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-2xl p-8 text-gray-800">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Free Case Review</h3>
                <p className="text-gray-600">Over $500 Million Recovered</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Describe Your Case</label>
                  <textarea
                    name="caseDescription"
                    rows={4}
                    value={formData.caseDescription}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your accident..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Free Case Review</span>
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose The Law Brothers®?</h2>
            <p className="text-xl text-gray-600">Led by Shawn and Shervin Lalezary, we treat our clients like family</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Over $500M Recovered</h3>
              <p className="text-gray-600">Proven track record of securing maximum compensation for our clients</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Family-First Approach</h3>
              <p className="text-gray-600">We treat every client like family with personalized attention</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Available 24/7</h3>
              <p className="text-gray-600">Round-the-clock support when you need us most</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CircleCheck className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">No Win, No Fee</h3>
              <p className="text-gray-600">You don't pay unless we successfully recover compensation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Motor Vehicle Accident Types We Handle</h2>
            <p className="text-xl text-gray-600">Comprehensive legal representation for all types of vehicle accidents</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Car Accidents',
              'Motorcycle Accidents', 
              'Truck Accidents',
              'Bicycle Accidents',
              'Pedestrian Accidents',
              'Uber/Lyft Accidents'
            ].map((service, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all">
                <Car className="text-blue-600" size={32} />
                <h3 className="text-xl font-semibold text-gray-800">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <div className="flex justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-500 fill-current" size={24} />
              ))}
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-500 fill-current" size={16} />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "They handled everything for me from car insurance questions to finding doctors. 
                This firm went above and beyond and continued to follow up with me."
              </p>
              <p className="font-semibold text-gray-800">- Jacqueline D.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-500 fill-current" size={16} />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "They were able to get a settlement that replaced my motorcycle and found me physical therapy. 
                They were always responsive to my texts, calls, and emails."
              </p>
              <p className="font-semibold text-gray-800">- Charles Mortensen</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-500 fill-current" size={16} />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Once my case was settled I ended up getting more than I was expecting, which was amazing. 
                I highly recommended this law firm to anyone that needs help."
              </p>
              <p className="font-semibold text-gray-800">- William Charlton</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Don't Wait - Get Help Today</h2>
          <p className="text-xl mb-8">The sooner you call, the sooner we can start fighting for your rights</p>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a 
              href="tel:8002222222" 
              className="bg-white text-red-600 hover:bg-gray-100 text-2xl font-bold py-4 px-8 rounded-lg transition-colors flex items-center space-x-3 shadow-lg"
            >
              <Phone size={28} />
              <span>(800) 222-2222</span>
            </a>
            
            <div className="text-center">
              <p className="text-lg font-semibold mb-1">AVAILABLE 24/7</p>
              <p className="text-sm">Hablamos Español</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Law Brothers®</h3>
              <p className="text-gray-300 mb-4">
                Award-winning personal injury attorneys fighting for maximum compensation. 
                Over $500 Million recovered for our clients.
              </p>
              <p className="text-gray-300">
                Led by Shawn and Shervin Lalezary
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2">
                <p className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>(800) 222-2222</span>
                </p>
                <p className="text-gray-300">Available 24/7</p>
                <p className="text-gray-300">Hablamos Español</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Headquarters</h4>
              <p className="text-gray-300">
                8370 Wilshire Blvd #205<br />
                Beverly Hills, CA 90211
              </p>
              <p className="text-sm text-gray-400 mt-4">
                Proud Partner of The San Diego Padres
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 The Law Brothers® Firm. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}