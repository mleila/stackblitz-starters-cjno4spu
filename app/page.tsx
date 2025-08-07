'use client'

import { useState } from 'react'
import { Phone, Shield, DollarSign, Clock, Car, Users, Star, CheckCircle, Menu, X } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    console.log('Form submitted:', Object.fromEntries(formData))
    alert('Thank you! We will contact you shortly.')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-gray-900">Law Brothers®</h1>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2">Services</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2">About</a>
                <a href="#testimonials" className="text-gray-700 hover:text-blue-600 px-3 py-2">Reviews</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2">Contact</a>
              </div>
            </div>

            {/* Phone Number */}
            <div className="hidden md:flex items-center">
              <a href="tel:8002222222" className="bg-red-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-700 flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                (800) 222-2222
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              <a href="#services" className="text-gray-700 hover:text-blue-600 block px-3 py-2">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 block px-3 py-2">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 block px-3 py-2">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 block px-3 py-2">Contact</a>
              <a href="tel:8002222222" className="bg-red-600 text-white px-3 py-2 rounded-md font-semibold hover:bg-red-700 flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                (800) 222-2222
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1556086744-7502d61b1af5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjY5NzB8MHwxfHNlYXJjaHwzfHxjYXIlMjBhY2NpZGVudCUyMGxlZ2FsJTIwanVzdGljZSUyMGxhd3xlbnwwfHx8fDE3NTQ1OTM3MDd8MA&ixlib=rb-4.1.0&q=80&w=1080")'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              INJURED IN A 
              <span className="text-red-500"> CAR ACCIDENT?</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 font-medium">
              Call the Law Brothers! Over $500 Million Recovered for Our Clients
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:8002222222"
                className="bg-red-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-red-700 transition-colors flex items-center"
              >
                <Phone className="w-6 h-6 mr-3" />
                CALL NOW: (800) 222-2222
              </a>
              <a 
                href="#contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-white hover:text-gray-900 transition-colors"
              >
                Free Case Review
              </a>
            </div>
            <p className="mt-4 text-lg">Available 24/7 • Hablamos Español</p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">No Fee Unless You Win</h3>
              <p className="text-gray-600">You don't pay attorney fees unless we recover compensation for you.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Available 24/7</h3>
              <p className="text-gray-600">Call us anytime, day or night. We're here when you need us most.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">We'll Come to You</h3>
              <p className="text-gray-600">Can't come to our office? No problem. We'll meet you wherever is convenient.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Free Consultation</h3>
              <p className="text-gray-600">Get expert legal advice at no cost. We'll evaluate your case for free.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1658249682516-c7789d418978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjY5NzB8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYXd5ZXIlMjBhdHRvcm5leSUyMGJ1c2luZXNzJTIwc3VpdHxlbnwwfHx8fDE3NTQ1OTM3MTF8MA&ixlib=rb-4.1.0&q=80&w=400"
                alt="Professional attorney"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet the Law Brothers®</h2>
              <p className="text-lg text-gray-700 mb-6">
                Led by Shawn and Shervin Lalezary, the Law Brothers® represent the injured and have recovered more than $500 Million for their clients over the years. With offices throughout California, Texas, and the West Coast, we employ a team of skilled personal injury professionals.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                What sets us apart is our passion for client service. We treat our clients like family, and no expense is spared in helping our clients maximize the value of their case. We're not afraid to take a case to trial when it's in the best interest of our clients.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700">$500M+ Recovered</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Experienced Team</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Personal Service</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Trial Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Car Accident Injury Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We handle all types of motor vehicle accidents and help you get the compensation you deserve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-red-600 text-white rounded-lg flex items-center justify-center mb-4">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Car Accidents</h3>
              <p className="text-gray-600">Comprehensive legal representation for all types of car accidents, from minor fender benders to serious collisions.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Truck Accidents</h3>
              <p className="text-gray-600">Specialized handling of commercial truck accidents with complex liability and insurance issues.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center mb-4">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Motorcycle Accidents</h3>
              <p className="text-gray-600">Expert representation for motorcycle accident victims facing severe injuries and biased insurance companies.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Pedestrian Accidents</h3>
              <p className="text-gray-600">Protecting the rights of pedestrians injured by negligent drivers and unsafe road conditions.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-orange-600 text-white rounded-lg flex items-center justify-center mb-4">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Uber/Lyft Accidents</h3>
              <p className="text-gray-600">Complex rideshare accident cases involving multiple insurance policies and liability issues.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-red-700 text-white rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Wrongful Death</h3>
              <p className="text-gray-600">Compassionate legal support for families who have lost loved ones in motor vehicle accidents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real testimonials from real clients who got real results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "I had gotten into an accident and had no idea what to do. This firm went above and beyond and continued to follow up with me. I highly recommend them."
              </p>
              <p className="font-semibold text-gray-900">- Jacqueline D.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "The team was amazing! They were able to get a settlement that replaced my motorcycle and found me physical therapy. They were always responsive to my calls."
              </p>
              <p className="font-semibold text-gray-900">- Charles Mortensen</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "This law firm is a team of miracle workers! My case manager kept me updated consistently. I felt trust and integrity throughout my case."
              </p>
              <p className="font-semibold text-gray-900">- Jason Avelar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get Your Free Case Evaluation</h2>
              <p className="text-xl mb-8">
                Don't wait. The sooner you call, the sooner we can start fighting for your rights. 
                Our consultation is completely free, and you won't pay unless we win your case.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4" />
                  <div>
                    <p className="font-semibold">Call Us Now</p>
                    <p className="text-lg">(800) 222-2222</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 mr-4" />
                  <div>
                    <p className="font-semibold">Available 24/7</p>
                    <p>We're here whenever you need us</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 mr-4" />
                  <div>
                    <p className="font-semibold">Hablamos Español</p>
                    <p>Spanish-speaking attorneys available</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Tell us about your accident *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Please describe what happened..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition-colors"
                >
                  Get My Free Case Review
                </button>

                <p className="text-sm text-gray-600 text-center">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Law Brothers®</h3>
              <p className="text-gray-400 mb-4">
                Award-winning personal injury attorneys fighting for your rights.
              </p>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:8002222222" className="text-red-400 hover:text-red-300">(800) 222-2222</a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Car Accidents</a></li>
                <li><a href="#" className="hover:text-white">Truck Accidents</a></li>
                <li><a href="#" className="hover:text-white">Motorcycle Accidents</a></li>
                <li><a href="#" className="hover:text-white">Wrongful Death</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Locations</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Los Angeles, CA</li>
                <li>San Diego, CA</li>
                <li>Houston, TX</li>
                <li>Seattle, WA</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="text-gray-400 space-y-2">
                <p>Available 24/7</p>
                <p>Hablamos Español</p>
                <p>No Fee Unless You Win</p>
                <p>Free Consultation</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 The Law Brothers® Firm. All Rights Reserved.</p>
            <p className="mt-2">
              <a href="#" className="hover:text-white mr-4">Privacy Policy</a>
              <a href="#" className="hover:text-white mr-4">Terms of Service</a>
              <a href="#" className="hover:text-white">Disclaimer</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky Call Button for Mobile */}
      <div className="fixed bottom-4 right-4 md:hidden z-50">
        <a 
          href="tel:8002222222"
          className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-colors flex items-center"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </div>
  )
}