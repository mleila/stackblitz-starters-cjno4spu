'use client';

import { useState } from 'react';

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Injured in a Car Accident?
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Get the Compensation You Deserve. No Win, No Fee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowForm(true)}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
              >
                Get Free Case Review
              </button>
              <a
                href="tel:1-800-LAW-BROS"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all"
              >
                Call Now: 1-800-LAW-BROS
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-300">
              Available 24/7 • Free Consultation • Hablamos Español
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-900">$500M+</h3>
              <p className="text-gray-600">Recovered for Clients</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-900">10,000+</h3>
              <p className="text-gray-600">Cases Won</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-900">35+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-900">98%</h3>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
            We Handle All Types of Motor Vehicle Accidents
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'Car Accidents', icon: '🚗', desc: 'Rear-end collisions, head-on crashes, and multi-vehicle accidents' },
              { title: 'Truck Accidents', icon: '🚛', desc: 'Commercial truck and 18-wheeler accident claims' },
              { title: 'Motorcycle Accidents', icon: '🏍️', desc: 'Protecting riders\' rights after serious injuries' },
              { title: 'Pedestrian Accidents', icon: '🚶', desc: 'Hit-and-run and crosswalk accident cases' },
              { title: 'Uber/Lyft Accidents', icon: '🚕', desc: 'Rideshare accident claims and insurance disputes' },
              { title: 'DUI Accidents', icon: '🚨', desc: 'Holding drunk drivers accountable' },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Law Brothers?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-4">✓ No Win, No Fee Guarantee</h3>
              <p className="text-gray-300 mb-6">
                You don\'t pay unless we win your case. We cover all upfront costs.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">✓ Maximum Compensation</h3>
              <p className="text-gray-300 mb-6">
                We fight for medical bills, lost wages, pain & suffering, and more.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">✓ Fast Results</h3>
              <p className="text-gray-300">
                Most cases settle within 6-12 months. We work quickly to get you paid.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">✓ Insurance Experts</h3>
              <p className="text-gray-300 mb-6">
                We know how to deal with insurance companies and their tactics.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">✓ Medical Network</h3>
              <p className="text-gray-300 mb-6">
                Access to top doctors who work on a lien basis - no upfront costs.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">✓ 24/7 Availability</h3>
              <p className="text-gray-300">
                Accidents don\'t wait. Neither do we. Call anytime, day or night.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Maria S.', amount: '$250,000', text: 'After my accident, I didn\'t know where to turn. Law Brothers handled everything and got me a settlement I never expected.' },
              { name: 'James T.', amount: '$180,000', text: 'The insurance company offered me $10,000. Law Brothers got me $180,000. I\'m so grateful for their help.' },
              { name: 'Sarah L.', amount: '$425,000', text: 'Professional, caring, and aggressive when needed. They fought for me every step of the way.' },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="font-bold text-slate-900">{testimonial.name}</div>
                <div className="text-green-600 font-bold">{testimonial.amount} Settlement</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don\'t Wait - Evidence Disappears Fast
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            The sooner you call, the stronger your case. Get your free consultation now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowForm(true)}
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
            >
              Start Your Free Case Review
            </button>
            <a
              href="tel:1-800-LAW-BROS"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-red-600 font-bold py-4 px-8 rounded-lg text-lg transition-all"
            >
              Call: 1-800-LAW-BROS
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Law Brothers</h3>
              <p className="text-gray-400">Fighting for accident victims since 1988</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-gray-400">1-800-LAW-BROS</p>
              <p className="text-gray-400">info@lawbrothers.com</p>
              <p className="text-gray-400">Available 24/7</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Offices</h4>
              <p className="text-gray-400">Los Angeles</p>
              <p className="text-gray-400">San Francisco</p>
              <p className="text-gray-400">San Diego</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Free Consultation</h4>
              <p className="text-gray-400">No fees unless we win</p>
              <p className="text-gray-400">Hablamos Español</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2024 Law Brothers. All rights reserved. | Attorney Advertising</p>
          </div>
        </div>
      </footer>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-8 relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Get Your Free Case Review</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
              />
              <textarea
                placeholder="Tell us about your accident..."
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
              />
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-all"
              >
                Get My Free Consultation
              </button>
              <p className="text-sm text-gray-600 text-center">
                By submitting, you agree to our privacy policy. We\'ll contact you within 24 hours.
              </p>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}