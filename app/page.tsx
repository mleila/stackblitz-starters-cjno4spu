'use client';

import { useState, useEffect } from 'react';
import { Phone, Shield, Check, Clock, Car, Scale, AlertTriangle, ArrowRight, Users, Award, FileText, HeartHandshake, Star, TrendingUp, Zap, ChevronRight } from 'lucide-react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
    <main className="bg-background text-foreground overflow-x-hidden">
      {/* Animated Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-background to-background/95">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce">
              <Zap className="w-4 h-4" />
              <span>24/7 Emergency Legal Help Available</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Injured in a Motor
              <span className="block text-primary animate-pulse">Vehicle Accident?</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Get the compensation you deserve. Our award-winning attorneys have recovered over <span className="text-primary font-semibold">$500 million</span> for accident victims.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <span className="relative z-10 flex items-center justify-center">
                  Get Free Case Review
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 transition-transform duration-300 group-hover:scale-110"></div>
              </button>
              
              <a
                href="tel:1-800-LAW-HELP"
                className="group px-8 py-4 border-2 border-border rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:bg-accent hover:border-accent hover:scale-105"
              >
                <Phone className="h-5 w-5 animate-pulse" />
                <span>Call: 1-800-LAW-HELP</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 rotate-90 text-muted-foreground" />
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-20 bg-card relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center transform transition-all duration-700 hover:scale-110"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  {stat.prefix}{stat.value}{stat.suffix}
                </div>
                <div className="text-muted-foreground mt-2 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services with Hover Effects */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              We Handle All Types of Accidents
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              No matter how you were injured, we have the expertise to fight for your rights
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Car, title: "Car Accidents", description: "From fender benders to major collisions", color: "from-blue-500/20 to-blue-600/20" },
              { icon: AlertTriangle, title: "Truck Accidents", description: "Commercial truck and 18-wheeler accidents", color: "from-red-500/20 to-red-600/20" },
              { icon: Users, title: "Pedestrian Accidents", description: "Protecting pedestrians injured by vehicles", color: "from-green-500/20 to-green-600/20" },
              { icon: Shield, title: "Motorcycle Accidents", description: "Specialized representation for riders", color: "from-purple-500/20 to-purple-600/20" },
              { icon: FileText, title: "Hit and Run", description: "Finding justice when drivers flee", color: "from-yellow-500/20 to-yellow-600/20" },
              { icon: Scale, title: "Wrongful Death", description: "Compassionate support for families", color: "from-pink-500/20 to-pink-600/20" }
            ].map((service, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
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
                  <p className="text-xl sm:text-2xl text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <cite className="text-lg font-semibold not-italic">{testimonial.author}</cite>
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
                  index === activeTestimonial ? 'w-8 bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Process Timeline */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Your Path to Justice
            </h2>
            <p className="text-xl text-muted-foreground">Simple, transparent, and effective</p>
          </div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-border transform -translate-y-1/2 hidden md:block"></div>
            <div className="grid md:grid-cols-4 gap-8 relative">
              {[
                { icon: Phone, title: "Free Consultation", description: "Call us anytime for immediate help" },
                { icon: FileText, title: "Case Investigation", description: "We gather evidence and build your case" },
                { icon: TrendingUp, title: "Negotiation", description: "Fighting for maximum compensation" },
                { icon: Award, title: "Get Results", description: "Receive the settlement you deserve" }
              ].map((step, index) => (
                <div key={index} className="relative group">
                  <div className="bg-card rounded-2xl p-6 text-center transition-all duration-500 hover:scale-105 hover:shadow-xl">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:animate-bounce">
                      <step.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-primary/10 via-background to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Start Your Free Case Review Now
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Don't wait - statutes of limitations apply. Get help today.
          </p>
          
          <div className="bg-card backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl border border-border/50">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-6 py-4 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 placeholder:text-muted-foreground"
                  />
                </div>
                <div className="group">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-6 py-4 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 placeholder:text-muted-foreground"
                  />
                </div>
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-6 py-4 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 placeholder:text-muted-foreground"
              />
              <textarea
                placeholder="Brief description of your accident"
                rows={4}
                className="w-full px-6 py-4 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 placeholder:text-muted-foreground resize-none"
              />
              <button
                type="submit"
                className="group relative w-full sm:w-auto px-12 py-5 bg-primary text-primary-foreground rounded-full font-bold text-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Submit for Free Review
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/80 transition-transform duration-500 group-hover:scale-110"></div>
              </button>
            </form>
            
            <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5" />
              <span className="text-sm">100% Confidential • No Obligation • No Fees Unless We Win</span>
            </div>
          </div>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <p className="text-muted-foreground">Prefer to talk? Call us now:</p>
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
      <footer className="bg-card border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Law Borther</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Fighting for accident victims' rights for over 25 years. Available 24/7 for emergency consultations.
            </p>
            <div className="flex justify-center gap-8 mb-8">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm">Top Rated Firm</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm">Millions Recovered</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm">24/7 Available</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
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
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </main>
  );
}