'use client';

import { Phone, Mail, Car, Clock, Shield, CircleCheck, Star, User } from 'lucide-react';

export default function Home() {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message')
    };
    console.log('Form submitted:', data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-blue-600" />
                <span className="text-2xl font-bold text-slate-900">Law Brothers®</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="tel:(800) 222-2222" 
                className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="font-semibold">(800) 222-2222</span>
              </a>
              <span className="text-sm text-slate-600">Available 24/7</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                INJURED?
                <br />
                <span className="text-yellow-400">CALL THE LAW BROTHERS!</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Over $500,000,000 Recovered For Our Clients
              </p>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <CircleCheck className="h-5 w-5 text-green-400" />
                  <span className="text-sm">No Fee Unless You Win</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Car className="h-5 w-5 text-green-400" />
                  <span className="text-sm">We'll Come To You</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-green-400" />
                  <span className="text-sm">Free Consultation</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:(800) 222-2222"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now: (800) 222-2222</span>
                </a>
                <a 
                  href="#contact-form"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-lg transition-colors"
                >
                  Get Free Consultation
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div id="contact-form" className="bg-white text-slate-900 p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Free Case Evaluation</h3>
              <p className="text-center text-slate-600 mb-6">The initial consultation is free! All fields are required.</p>
              
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Describe Your Case *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-colors"
                >
                  Review My Case
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Motor Vehicle Accident Practice Areas</h2>
            <p className="text-xl text-slate-600">
              The Law Brothers® have successfully litigated in the following personal injury practice areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border border-slate-200 rounded-lg hover:shadow-lg transition-shadow">
              <Car className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Car Accidents</h3>
              <p className="text-slate-600">Comprehensive representation for all types of car accident cases</p>
            </div>
            
            <div className="text-center p-6 border border-slate-200 rounded-lg hover:shadow-lg transition-shadow">
              <Car className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Motorcycle Accidents</h3>
              <p className="text-slate-600">Specialized knowledge in motorcycle accident cases</p>
            </div>
            
            <div className="text-center p-6 border border-slate-200 rounded-lg hover:shadow-lg transition-shadow">
              <Car className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibred text-slate-900 mb-2">Truck Accidents</h3>
              <p className="text-slate-600">Expert handling of commercial truck accident claims</p>
            </div>
            
            <div className="text-center p-6 border border-slate-200 rounded-lg hover:shadow-lg transition-shadow">
              <User className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Pedestrian Accidents</h3>
              <p className="text-slate-600">Protecting the rights of injured pedestrians</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 mb-4">
                "I had gotten into an accident and had no idea what to do. They handled everything for me from car insurance questions to finding doctors. I give five stars because this firm went above and beyond."
              </p>
              <p className="font-semibold text-slate-900">- Jacqueline D.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 mb-4">
                "The team at Law Brothers were amazing! I was hit by a car while riding a motorcycle. They were able to not only get a settlement that replaced my motorcycle, but they found me physical therapy."
              </p>
              <p className="font-semibold text-slate-900">- Charles Mortensen</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 mb-4">
                "This law firm is a team of miracle workers! They work diligently and keep at it until your case is completed. I felt trust and integrity throughout my case."
              </p>
              <p className="font-semibold text-slate-900">- Jason Avelar</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Let's Get Started On Your Case</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Submit A Free Case Evaluation</h3>
              <p className="text-blue-100">You can find out if you qualify immediately</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Get A Call From Us</h3>
              <p className="text-blue-100">Our specialists will walk you through your case and collect all the right information to win your case.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Let Us Get to Work</h3>
              <p className="text-blue-100">Our specialized attorneys will handle every step of your case from start to finish. You don't pay until we win.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="tel:(800) 222-2222"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors inline-flex items-center space-x-2"
            >
              <Phone className="h-6 w-6" />
              <span>Call Us Now: (800) 222-2222</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">Law Brothers®</span>
              </div>
              <p className="text-slate-300 mb-4">
                Led by Shawn and Shervin Lalezary, the Law Brothers® represent the injured and have recovered more than $500 Million for their clients over the years.
              </p>
              <div className="flex items-center space-x-4">
                <a href="tel:(800) 222-2222" className="flex items-center space-x-2 text-blue-400 hover:text-blue-300">
                  <Phone className="h-4 w-4" />
                  <span>(800) 222-2222</span>
                </a>
                <span className="text-slate-400">Available 24/7</span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Practice Areas</h4>
              <ul className="space-y-2 text-slate-300">
                <li>Car Accidents</li>
                <li>Motorcycle Accidents</li>
                <li>Truck Accidents</li>
                <li>Pedestrian Accidents</li>
                <li>Wrongful Death</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Why Choose Us</h4>
              <ul className="space-y-2 text-slate-300">
                <li>$0 Upfront Fees</li>
                <li>We Come To You</li>
                <li>Free Consultation</li>
                <li>24/7 Availability</li>
                <li>No Fee Unless You Win</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400">
              © 2025 The Law Brothers® Firm. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}