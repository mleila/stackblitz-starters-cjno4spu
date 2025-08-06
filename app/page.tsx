'use client';

import { Phone, Shield, Check, Clock, Car, Scale, AlertTriangle, ArrowRight, Users, Award, FileText, HeartHandshake } from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Injured in a Motor Vehicle Accident?
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get the compensation you deserve. Our experienced attorneys fight for your rights while you focus on recovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-900 bg-white rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="tel:1-800-LAW-HELP"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: 1-800-LAW-HELP
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900">$500M+</div>
              <div className="text-gray-600 mt-1">Recovered for Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">25+</div>
              <div className="text-gray-600 mt-1">Years of Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">10,000+</div>
              <div className="text-gray-600 mt-1">Cases Won</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">98%</div>
              <div className="text-gray-600 mt-1">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Types of Motor Vehicle Accidents We Handle
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team specializes in all types of motor vehicle accident cases
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Car,
                title: "Car Accidents",
                description: "From fender benders to major collisions, we handle all car accident cases"
              },
              {
                icon: AlertTriangle,
                title: "Truck Accidents",
                description: "Commercial truck and 18-wheeler accidents with severe injuries"
              },
              {
                icon: Users,
                title: "Pedestrian Accidents",
                description: "Representing pedestrians injured by negligent drivers"
              },
              {
                icon: Shield,
                title: "Motorcycle Accidents",
                description: "Protecting the rights of motorcyclists injured on the road"
              },
              {
                icon: FileText,
                title: "Hit and Run",
                description: "Helping victims of hit-and-run accidents get justice"
              },
              {
                icon: Scale,
                title: "Wrongful Death",
                description: "Compassionate representation for families who have lost loved ones"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <service.icon className="h-12 w-12 text-gray-700 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Law Borther for Your Case?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Award,
                    title: "No Win, No Fee",
                    description: "You don't pay unless we win your case"
                  },
                  {
                    icon: Clock,
                    title: "24/7 Availability",
                    description: "We're here when you need us most"
                  },
                  {
                    icon: HeartHandshake,
                    title: "Personalized Attention",
                    description: "Every case gets the attention it deserves"
                  },
                  {
                    icon: Shield,
                    title: "Maximum Compensation",
                    description: "We fight for every dollar you're entitled to"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-gray-700" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-900 text-white rounded-lg p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-4">What Our Clients Receive</h3>
              <ul className="space-y-3">
                {[
                  "Free case evaluation",
                  "Medical expense coverage",
                  "Lost wages compensation",
                  "Pain and suffering damages",
                  "Property damage reimbursement",
                  "Future care costs",
                  "Punitive damages when applicable"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Simple Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make it easy to get the help you need
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Free Consultation",
                description: "Call us or fill out our form for a free case review"
              },
              {
                step: "2",
                title: "Case Investigation",
                description: "We gather evidence and build your case"
              },
              {
                step: "3",
                title: "Negotiation",
                description: "We negotiate with insurance companies for you"
              },
              {
                step: "4",
                title: "Get Compensation",
                description: "Receive the settlement you deserve"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Don't Wait to Get the Help You Need
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Time limits apply to accident claims. Contact us today for your free consultation.
          </p>
          <div className="bg-white text-gray-900 rounded-lg p-8 sm:p-12">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <textarea
                placeholder="Tell us about your accident"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
              >
                Get Your Free Consultation
              </button>
            </form>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <p className="text-gray-300">Or call us directly:</p>
            <a
              href="tel:1-800-LAW-HELP"
              className="inline-flex items-center text-2xl font-bold hover:underline"
            >
              <Phone className="mr-2 h-6 w-6" />
              1-800-LAW-HELP
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              © 2024 Law Borther. All rights reserved. | Attorney Advertising
            </p>
            <p className="text-sm text-gray-500 max-w-3xl mx-auto">
              The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}