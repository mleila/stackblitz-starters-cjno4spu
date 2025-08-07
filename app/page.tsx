'use client'

import { useState } from 'react'
import { Car, Phone, Mail, Shield, Clock, CheckCircle, Star, MapPin, AlertCircle, ArrowRight, Users, Award, DollarSign } from 'lucide-react'

export default function MotorVehicleAccidentLandingPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    })
    alert('Thank you for your submission. We will contact you within 24 hours.')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-foreground text-background">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-background/10 rounded-full px-4 py-2 mb-6">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Available 24/7</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              INJURED IN A CAR ACCIDENT?
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-background/90">
              Call The Law Brothers®! Over $500,000,000 Recovered For Our Clients
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8002222222"
                className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-background/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                (800) 222-2222
              </a>
              <button
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 border-2 border-background text-background px-8 py-4 rounded-lg font-semibold text-lg hover:bg-background hover:text-foreground transition-colors"
              >
                Free Case Review
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <DollarSign className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">$500M+</h3>
              <p className="text-muted-foreground">Recovered for Clients</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Shield className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">No Fees</h3>
              <p className="text-muted-foreground">Unless You Win</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Clock className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">24/7</h3>
              <p className="text-muted-foreground">Available Support</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Award className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Award-Winning</h3>
              <p className="text-muted-foreground">Personal Injury Attorneys</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What We Do For You</h2>
            <p className="text-lg text-muted-foreground">
              Our experienced car accident attorneys handle everything from A to Z, so you can focus on recovery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <CheckCircle className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Handle Insurance Companies</h3>
              <p className="text-muted-foreground">
                No more stressful calls. We deal with insurance companies directly on your behalf.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <CheckCircle className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Medical Bill Management</h3>
              <p className="text-muted-foreground">
                We help coordinate your medical care and handle bill negotiations.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <CheckCircle className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Maximize Compensation</h3>
              <p className="text-muted-foreground">
                We fight to get you the maximum settlement for your injuries and damages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">
              Getting started with The Law Brothers® is simple and free.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Case Evaluation</h3>
              <p className="text-muted-foreground">
                Submit your information and find out if you qualify immediately.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">We Call You</h3>
              <p className="text-muted-foreground">
                Our specialists walk you through your case and collect all necessary information.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">We Get to Work</h3>
              <p className="text-muted-foreground">
                Our attorneys handle every step of your case. You don't pay until we win.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Real experiences from real clients who trusted The Law Brothers®.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "I got into a severe car accident at the end of 2016 and they've been with me every step of the way. 
                They have been responsive, helpful, and reassuring. I would definitely recommend!"
              </p>
              <p className="font-semibold">- Ivonne K.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "This law firm is a team of miracle workers! My case manager gathered all the details from my accident 
                within a week and kept me updated consistently to keep me at ease."
              </p>
              <p className="font-semibold">- Jason A.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Get Your Free Case Evaluation</h2>
              <p className="text-lg text-muted-foreground">
                The initial consultation is free! All fields are required.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-lg shadow-sm border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Tell us about your accident *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Please describe your accident, injuries, and any other relevant details..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Get My Free Case Review
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Don't Wait - Call Now!</h2>
          <p className="text-xl mb-8 text-background/90">
            Time limits apply to car accident claims. Get your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8002222222"
              className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-background/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call (800) 222-2222
            </a>
            <div className="flex items-center gap-2 text-background">
              <Clock className="w-5 h-5" />
              <span>Available 24/7 • Hablamos Español</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">The Law Brothers®</h3>
              <p className="text-muted-foreground mb-4">
                Award-winning personal injury attorneys serving California, Texas, and Washington.
              </p>
              <div className="flex gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm">No Fee Unless You Win</span>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Practice Areas</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Car Accidents</li>
                <li>Motorcycle Accidents</li>
                <li>Truck Accidents</li>
                <li>Pedestrian Accidents</li>
                <li>Wrongful Death</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:8002222222" className="hover:text-foreground">(800) 222-2222</a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Multiple Locations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Available 24/7</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 The Law Brothers® Firm. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}