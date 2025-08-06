'use client';

import { useState, useEffect } from 'react';
import { Phone, Shield, Check, Clock, Car, Scale, AlertTriangle, ArrowRight, Users, Award, FileText, HeartHandshake, Star, TrendingUp, Zap, ChevronRight } from 'lucide-react';
import { submitFormPayload } from './actions';

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      description: formData.get('description') as string,
      timestamp: new Date().toISOString(),
    };

    try {
      const { error } = await submitFormPayload({ payload });
      
      if (error) {
        console.error('Form submission error:', error);
        setSubmitStatus('error');
      } else {
        setSubmitStatus('success');
        (event.target as HTMLFormElement).reset();
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const stats = [
    { value: 500, suffix: 'M+', label: 'Recovered for Clients', prefix: '$' },
    { value: 25, suffix: '+', label: 'Years of Experience' },
    { value: 10000, suffix: '+', label: 'Cases Won' },
    { value: 98, suffix: '%', label: 'Success Rate' },
  ];

  const testimonials = [
    {
      text: "They got me $250,000 for my car accident. Professional and caring throughout the entire process.",
      author: "Sarah M.",
      rating: 5
    },
    {
      text: "After my motorcycle accident, I didn't know where to turn. Law Borther fought for me and won.",
      author: "Michael R.",
      rating: 5
    },
    {
      text: "The team was available 24/7 and kept me informed every step of the way. Highly recommend!",
      author: "Jennifer L.",
      rating: 5
    }
  ];

  return (
    <main className="bg-gray-50 text-gray-900 overflow-x-hidden">
      {/* Animated Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full blur-3xl animate-pulse opacity-30"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full blur-3xl animate-pulse opacity-30" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-accent-100 text-accent-900 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce">
              <Zap className="w-4 h-4" />
              <span>24/7 Emergency Legal Help Available</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Injured in a Motor
              </span>
              <span className="block text-primary animate-pulse">Vehicle Accident?</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Get the compensation you deserve. Our award-winning attorneys have recovered over <span className="text-primary font-semibold">$500 million</span> for accident victims.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <span className="relative z-10 flex items-center justify-center">
                  Get Free Case Review
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 transition-transform duration-300 group-hover:scale-110"></div>
              </button>
              
              <a
                href="tel:1-800-LAW-HELP"
                className="group px-8 py-4 border-2 border-gray-300 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:bg-accent-50 hover:border-accent-300 hover:scale-105"
              >
                <Phone className="h-5 w-5 animate-pulse" />
                <span>Call: 1-800-LAW-HELP</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 rotate-90 text-gray-400" />
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-20 bg-white relative border-y border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-transparent opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center transform transition-all duration-700 hover:scale-110"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                  {stat.prefix}{stat.value}{stat.suffix}
                </div>
                <div className="text-gray-600 mt-2 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services with Hover Effects */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                We Handle All Types of Accidents
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No matter how you were injured, we have the expertise to fight for your rights
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Car, title: "Car Accidents", description: "From fender benders to major collisions", colorClass: "from-primary-100 to-primary-200" },
              { icon: AlertTriangle, title: "Truck Accidents", description: "Commercial truck and 18-wheeler accidents", colorClass: "from-secondary-100 to-secondary-200" },
              { icon: Users, title: "Pedestrian Accidents", description: "Protecting pedestrians injured by vehicles", colorClass: "from-accent-100 to-accent-200" },
              { icon: Shield, title: "Motorcycle Accidents", description: "Specialized representation for riders", colorClass: "from-primary-100 to-primary-200" },
              { icon: FileText, title: "Hit and Run", description: "Finding justice when drivers flee", colorClass: "from-secondary-100 to-secondary-200" },
              { icon: Scale, title: "Wrongful Death", description: "Compassionate support for families", colorClass: "from-accent-100 to-accent-200" }
            ].map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.colorClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-7 w-7 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">What Our Clients Say</h2>
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary-500 text-primary-500" />
              ))}
            </div>
          </div>
          
          <div className="relative h-48">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === activeTestimonial
                    ? 'opacity-100 transform translate-x-0'
                    : index < activeTestimonial
                    ? 'opacity-0 transform -translate-x-full'
                    : 'opacity-0 transform translate-x-full'
                }`}
              >
                <blockquote className="text-center">
                  <p className="text-xl sm:text-2xl text-gray-600 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <cite className="text-lg font-semibold not-italic text-gray-900">{testimonial.author}</cite>
                </blockquote>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeTestimonial ? 'w-8 bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Process Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
              Your Path to Justice
            </h2>
            <p className="text-xl text-gray-600">Simple, transparent, and effective</p>
          </div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2 hidden md:block"></div>
            <div className="grid md:grid-cols-4 gap-8 relative">
              {[
                { icon: Phone, title: "Free Consultation", description: "Call us anytime for immediate help" },
                { icon: FileText, title: "Case Investigation", description: "We gather evidence and build your case" },
                { icon: TrendingUp, title: "Negotiation", description: "Fighting for maximum compensation" },
                { icon: Award, title: "Get Results", description: "Receive the settlement you deserve" }
              ].map((step, index) => (
                <div key={index} className="relative group">
                  <div className="bg-white rounded-2xl p-6 text-center transition-all duration-500 hover:scale-105 hover:shadow-xl border border-gray-100">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:animate-bounce">
                      <step.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl animate-pulse opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200 rounded-full blur-3xl animate-pulse opacity-20" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Start Your Free Case Review Now
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Don't wait - statutes of limitations apply. Get help today.
          </p>
          
          <div className="bg-white backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-200">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 placeholder:text-gray-400"
                  />
                </div>
                <div className="group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 placeholder:text-gray-400"
                  />
                </div>
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full px-6 py-4 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 placeholder:text-gray-400"
              />
              <textarea
                name="description"
                placeholder="Brief description of your accident"
                rows={4}
                required
                className="w-full px-6 py-4 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 placeholder:text-gray-400 resize-none"
              />
              
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>Thank you! We'll contact you within 24 hours.</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl">
                  <span>Something went wrong. Please try again or call us directly.</span>
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full sm:w-auto px-12 py-5 bg-primary text-primary-foreground rounded-full font-bold text-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {isSubmitting ? 'Submitting...' : 'Submit for Free Review'}
                  {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 transition-transform duration-500 group-hover:scale-110"></div>
              </button>
            </form>
            
            <div className="mt-8 flex items-center justify-center gap-2 text-gray-600">
              <Shield className="w-5 h-5" />
              <span className="text-sm">100% Confidential • No Obligation • No Fees Unless We Win</span>
            </div>
          </div>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <p className="text-gray-600">Prefer to talk? Call us now:</p>
            <a
              href="tel:1-800-LAW-HELP"
              className="inline-flex items-center gap-2 text-2xl font-bold text-primary hover:underline transition-all duration-300 hover:scale-105"
            >
              <Phone className="h-6 w-6 animate-pulse" />
              1-800-LAW-HELP
            </a>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Law Borther</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Fighting for accident victims' rights for over 25 years. Available 24/7 for emergency consultations.
            </p>
            <div className="flex justify-center gap-8 mb-8">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary-400" />
                <span className="text-sm text-gray-300">Top Rated Firm</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary-400" />
                <span className="text-sm text-gray-300">Millions Recovered</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary-400" />
                <span className="text-sm text-gray-300">24/7 Available</span>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              © 2024 Law Borther. All rights reserved. | Attorney Advertising | Past results do not guarantee future outcomes.
            </p>
          </div>
        </div>
      </footer>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}