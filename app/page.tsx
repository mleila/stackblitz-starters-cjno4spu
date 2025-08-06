export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-primary-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Law Brothers</div>
          <div className="text-secondary-400 font-semibold">
            (800) 222-2222
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Award-Winning Personal Injury Attorneys
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-4xl mx-auto">
            Led by Shawn and Shervin Lalezary, the Law Brothers have recovered more than{' '}
            <span className="text-secondary-300 font-bold">$500 Million</span>{' '}
            for their clients across California, Texas, and the West Coast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-bold py-4 px-8 rounded-lg transition-colors">
              Free Consultation
            </button>
            <button className="border-2 border-secondary-500 text-secondary-400 hover:bg-secondary-500 hover:text-primary-900 font-bold py-4 px-8 rounded-lg transition-colors">
              Call Now
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-secondary-600 mb-2">$500M+</div>
              <div className="text-neutral-700 font-medium">Recovered for Clients</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-secondary-600 mb-2">8+</div>
              <div className="text-neutral-700 font-medium">Years Experience</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-secondary-600 mb-2">24/7</div>
              <div className="text-neutral-700 font-medium">Available Support</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-secondary-600 mb-2">No Fee</div>
              <div className="text-neutral-700 font-medium">Unless You Win</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary-900 mb-6">
                Meet the Law Brothers
              </h2>
              <p className="text-lg text-neutral-700 mb-6">
                Shawn and Shervin Lalezary are dedicated personal injury attorneys with a proven track record of success. 
                Their unique combination of legal expertise and law enforcement background gives them unparalleled insight 
                into personal injury cases.
              </p>
              <p className="text-lg text-neutral-700 mb-8">
                With offices throughout California, Texas, and the West Coast, the Law Brothers employ a team of skilled 
                professionals and work with trusted medical experts and accident reconstruction specialists.
              </p>
              <button className="bg-accent-600 hover:bg-accent-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Learn More About Us
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-primary-800 mb-4">Why Choose Law Brothers?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-secondary-500 text-primary-900 rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm mr-3 mt-0.5">✓</div>
                  <span className="text-neutral-700">Over $500 million recovered for clients</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary-500 text-primary-900 rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm mr-3 mt-0.5">✓</div>
                  <span className="text-neutral-700">Law enforcement background and expertise</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary-500 text-primary-900 rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm mr-3 mt-0.5">✓</div>
                  <span className="text-neutral-700">Available 24/7 for consultations</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary-500 text-primary-900 rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm mr-3 mt-0.5">✓</div>
                  <span className="text-neutral-700">No fee unless you win your case</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Our Practice Areas</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We specialize in personal injury law and have successfully represented clients in various types of cases.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Vehicle Accidents', desc: 'Car, truck, motorcycle, and other vehicle-related accidents' },
              { title: 'Personal Injury', desc: 'Comprehensive personal injury representation and advocacy' },
              { title: 'Product Liability', desc: 'Defective products causing injury or harm to consumers' },
              { title: 'Wrongful Death', desc: 'Justice for families who have lost loved ones due to negligence' },
              { title: 'Slip and Fall', desc: 'Premises liability cases involving dangerous property conditions' },
              { title: 'Medical Malpractice', desc: 'Healthcare provider negligence and medical error cases' }
            ].map((service, index) => (
              <div key={index} className="bg-neutral-50 p-6 rounded-lg border border-neutral-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-primary-800 mb-3">{service.title}</h3>
                <p className="text-neutral-600 mb-4">{service.desc}</p>
                <button className="text-accent-600 hover:text-accent-700 font-medium transition-colors">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Fight for Your Rights?
          </h2>
          <p className="text-xl text-primary-200 mb-8 max-w-3xl mx-auto">
            Don't wait. Contact the Law Brothers today for your free consultation. 
            We'll come to you, and there's no fee unless you win your case.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-bold py-4 px-8 rounded-lg transition-colors text-lg">
              Get Free Consultation
            </button>
            <div className="flex items-center justify-center">
              <span className="text-secondary-400 font-bold text-2xl">(800) 222-2222</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-400 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">Law Brothers</h3>
              <p className="text-neutral-400 mb-4 max-w-md">
                Award-winning personal injury attorneys serving clients across California, Texas, and the West Coast. 
                Over $500 million recovered for our clients.
              </p>
              <div className="text-secondary-400 font-semibold text-lg">
                No Fee Unless You Win
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Practice Areas</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-secondary-400 transition-colors">Personal Injury</a></li>
                <li><a href="#" className="hover:text-secondary-400 transition-colors">Vehicle Accidents</a></li>
                <li><a href="#" className="hover:text-secondary-400 transition-colors">Product Liability</a></li>
                <li><a href="#" className="hover:text-secondary-400 transition-colors">Wrongful Death</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2">
                <div className="text-white font-medium">Beverly Hills Office:</div>
                <div>8370 Wilshire Blvd #205</div>
                <div>Beverly Hills, CA 90211</div>
                <div className="text-secondary-400 font-bold text-lg pt-2">(800) 222-2222</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-neutral-700 mt-8 pt-8 text-center">
            <p>&copy; 2024 Law Brothers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}