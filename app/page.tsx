import { 
  Phone, 
  CheckCircle, 
  Car, 
  Scale, 
  Shield, 
  Heart, 
  AlertTriangle, 
  Building2,
  ArrowRight,
  Clock,
  Award,
  Users,
  AlertCircle
} from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-neutral-50/80 backdrop-blur-xl border-b border-neutral-200/50 fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-primary-900 to-primary-700 bg-clip-text text-transparent">
              Law Brothers
            </div>
            <div className="flex items-center gap-6">
              <nav className="hidden md:flex items-center gap-8 text-neutral-600 font-medium">
                <a href="#" className="hover:text-primary-700 transition-colors">About</a>
                <a href="#" className="hover:text-primary-700 transition-colors">Services</a>
                <a href="#" className="hover:text-primary-700 transition-colors">Results</a>
              </nav>
              <div className="bg-secondary-500 text-primary-900 px-6 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <Phone size={20} />
                (800) 222-2222
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(251,191,36,0.1)_0%,transparent_50%)] bg-[radial-gradient(circle_at_80%_20%,rgba(239,68,68,0.1)_0%,transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-secondary-500/10 backdrop-blur-sm border border-secondary-400/20 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-secondary-400 rounded-full animate-pulse"></div>
              <span className="text-secondary-300 font-semibold">Available 24/7 for Free Consultation</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-neutral-50 via-secondary-200 to-neutral-50 bg-clip-text text-transparent">
                Award-Winning
              </span>
              <br />
              <span className="text-neutral-50">Personal Injury</span>
              <br />
              <span className="bg-gradient-to-r from-secondary-400 to-secondary-600 bg-clip-text text-transparent">
                Attorneys
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl mb-12 text-primary-100 max-w-5xl mx-auto leading-relaxed font-light">
              Led by Shawn and Shervin Lalezary, we've recovered{' '}
              <span className="font-bold bg-gradient-to-r from-secondary-300 to-secondary-500 bg-clip-text text-transparent">
                $500+ Million
              </span>{' '}
              for our clients across California, Texas, and the West Coast.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group relative bg-secondary-500 hover:bg-secondary-400 text-primary-900 font-bold py-6 px-12 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg">
                <span className="relative z-10">Get Free Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-400 to-secondary-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group border-2 border-secondary-400/50 hover:border-secondary-400 bg-secondary-400/5 backdrop-blur-sm text-secondary-300 hover:text-secondary-200 font-bold py-6 px-12 rounded-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
                Call Now 
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-secondary-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-gradient-to-b from-neutral-50 to-neutral-100 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { value: '$500M+', label: 'Recovered for Clients', icon: Award },
              { value: '8+', label: 'Years Experience', icon: Users },
              { value: '24/7', label: 'Available Support', icon: Clock },
              { value: 'No Fee', label: 'Unless You Win', icon: CheckCircle }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-neutral-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-200/50 hover:border-secondary-300/30 group-hover:-translate-y-2">
                  <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 p-4 rounded-2xl">
                      <stat.icon size={32} className="text-primary-900" />
                    </div>
                  </div>
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-secondary-600 to-secondary-800 bg-clip-text text-transparent mb-4">
                    {stat.value}
                  </div>
                  <div className="text-neutral-700 font-medium text-lg">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-gradient-to-br from-neutral-100 to-neutral-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-accent-500 to-accent-700 text-neutral-50 px-4 py-2 rounded-full text-sm font-semibold">
                  Meet Your Legal Team
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary-900 to-primary-700 bg-clip-text text-transparent">
                  The Law Brothers
                </span>
              </h2>
              
              <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
                <p>
                  Shawn and Shervin Lalezary are dedicated personal injury attorneys with a proven track record of success. 
                  Their unique combination of legal expertise and law enforcement background gives them unparalleled insight 
                  into personal injury cases.
                </p>
                <p>
                  With offices throughout California, Texas, and the West Coast, the Law Brothers employ a team of skilled 
                  professionals and work with trusted medical experts and accident reconstruction specialists.
                </p>
              </div>
              
              <button className="bg-accent-600 hover:bg-accent-500 text-neutral-50 font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3">
                Learn More About Us 
                <ArrowRight size={20} />
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 p-12 rounded-3xl shadow-2xl border border-neutral-200/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary-500 to-accent-500"></div>
                
                <h3 className="text-3xl font-bold text-primary-800 mb-8">Why Choose Law Brothers?</h3>
                
                <div className="space-y-6">
                  {[
                    { text: 'Over $500 million recovered for clients', icon: Award },
                    { text: 'Law enforcement background and expertise', icon: Shield },
                    { text: 'Available 24/7 for consultations', icon: Clock },
                    { text: 'No fee unless you win your case', icon: CheckCircle }
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 text-primary-900 rounded-xl w-12 h-12 flex items-center justify-center mr-4 mt-1 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <benefit.icon size={20} />
                      </div>
                      <span className="text-neutral-700 text-lg leading-relaxed pt-3">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-32 bg-gradient-to-b from-neutral-50 to-neutral-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <span className="bg-gradient-to-r from-primary-600 to-primary-800 text-neutral-50 px-6 py-3 rounded-full text-sm font-semibold mb-6 inline-block">
              Our Expertise
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-900 to-primary-700 bg-clip-text text-transparent">
                Practice Areas
              </span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              We specialize in personal injury law and have successfully represented clients in various types of cases.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Vehicle Accidents', desc: 'Car, truck, motorcycle, and other vehicle-related accidents', icon: Car },
              { title: 'Personal Injury', desc: 'Comprehensive personal injury representation and advocacy', icon: Scale },
              { title: 'Product Liability', desc: 'Defective products causing injury or harm to consumers', icon: Shield },
              { title: 'Wrongful Death', desc: 'Justice for families who have lost loved ones due to negligence', icon: Heart },
              { title: 'Slip and Fall', desc: 'Premises liability cases involving dangerous property conditions', icon: AlertTriangle },
              { title: 'Medical Malpractice', desc: 'Healthcare provider negligence and medical error cases', icon: Building2 }
            ].map((service, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-200/50 hover:border-secondary-300/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary-500 to-accent-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  
                  <div className="mb-6">
                    <div className="bg-gradient-to-br from-primary-600 to-primary-800 p-4 rounded-2xl inline-block">
                      <service.icon size={32} className="text-secondary-400" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-800 mb-4 group-hover:text-primary-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">{service.desc}</p>
                  <button className="text-accent-600 hover:text-accent-500 font-semibold transition-colors flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    Learn More 
                    <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(251,191,36,0.1)_0%,transparent_70%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block mb-8">
            <span className="bg-secondary-500/20 backdrop-blur-sm text-secondary-300 px-6 py-3 rounded-full text-sm font-semibold border border-secondary-400/20 flex items-center gap-2 justify-center">
              <AlertCircle size={16} />
              Ready to Take Action?
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-neutral-50 to-secondary-200 bg-clip-text text-transparent">
              Fight for Your Rights
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Don't wait. Contact the Law Brothers today for your free consultation. 
            We'll come to you, and there's no fee unless you win your case.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative bg-secondary-500 hover:bg-secondary-400 text-primary-900 font-bold py-6 px-12 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg">
              <span className="relative z-10">Get Free Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-400 to-secondary-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <div className="flex items-center gap-3 bg-secondary-400/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-secondary-400/20">
              <div className="w-3 h-3 bg-secondary-400 rounded-full animate-pulse"></div>
              <Phone size={24} className="text-secondary-400" />
              <span className="text-secondary-300 font-bold text-2xl">(800) 222-2222</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-neutral-900 to-neutral-800 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="text-4xl font-bold bg-gradient-to-r from-secondary-400 to-secondary-600 bg-clip-text text-transparent">
                Law Brothers
              </div>
              <p className="text-neutral-400 text-lg leading-relaxed max-w-md">
                Award-winning personal injury attorneys serving clients across California, Texas, and the West Coast. 
                Over $500 million recovered for our clients.
              </p>
              <div className="inline-block bg-gradient-to-r from-secondary-500 to-secondary-700 text-primary-900 px-6 py-3 rounded-xl font-bold text-lg flex items-center gap-2">
                <CheckCircle size={20} />
                No Fee Unless You Win
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-neutral-50 mb-6">Practice Areas</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Personal Injury', icon: Scale },
                  { name: 'Vehicle Accidents', icon: Car },
                  { name: 'Product Liability', icon: Shield },
                  { name: 'Wrongful Death', icon: Heart }
                ].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-neutral-400 hover:text-secondary-400 transition-colors text-lg flex items-center gap-3 group">
                      <item.icon size={16} className="text-secondary-500 group-hover:text-secondary-400 transition-colors" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-neutral-50 mb-6">Contact</h4>
              <div className="space-y-4">
                <div>
                  <div className="text-neutral-50 font-semibold text-lg mb-2 flex items-center gap-2">
                    <Building2 size={20} className="text-secondary-500" />
                    Beverly Hills Office:
                  </div>
                  <div className="text-neutral-400 text-lg ml-7">8370 Wilshire Blvd #205</div>
                  <div className="text-neutral-400 text-lg ml-7">Beverly Hills, CA 90211</div>
                </div>
                <div className="bg-gradient-to-r from-secondary-500 to-secondary-700 text-primary-900 px-4 py-2 rounded-lg font-bold text-xl inline-flex items-center gap-2">
                  <Phone size={20} />
                  (800) 222-2222
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-neutral-700 mt-16 pt-8 text-center">
            <p className="text-neutral-500">&copy; 2024 Law Brothers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}