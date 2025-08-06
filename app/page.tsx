export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-primary-900 text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Award-Winning Personal Injury Attorneys
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 leading-relaxed">
              Led by Shawn and Shervin Lalezary, the Law Brothers have recovered more than 
              <span className="text-accent-400 font-semibold"> $500 Million </span>
              for their clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent-500 hover:bg-accent-600 text-primary-900 font-bold py-4 px-8 rounded-lg transition-colors duration-200 shadow-medium">
                Free Consultation
              </button>
              <button className="border-2 border-accent-500 text-accent-400 hover:bg-accent-500 hover:text-primary-900 font-bold py-4 px-8 rounded-lg transition-colors duration-200">
                Call (800) 222-2222
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-accent-600 mb-2">$500M+</div>
              <div className="text-primary-700 font-medium">Recovered for Clients</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-accent-600 mb-2">8+</div>
              <div className="text-primary-700 font-medium">Years Experience</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-accent-600 mb-2">24/7</div>
              <div className="text-primary-700 font-medium">Available Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">
              Our Practice Areas
            </h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              Specialized legal representation for personal injury cases across California, Texas, and the West Coast.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Vehicle Accidents',
              'Personal Injury',
              'Product Liability',
              'Wrongful Death',
              'Slip and Fall',
              'Medical Malpractice'
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-soft hover:shadow-medium transition-shadow duration-200">
                <h3 className="text-xl font-semibold text-primary-800 mb-3">{service}</h3>
                <p className="text-neutral-600 mb-4">
                  Expert legal representation with a track record of successful outcomes.
                </p>
                <button className="text-accent-600 hover:text-accent-700 font-medium transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Fight for Your Rights?
          </h2>
          <p className="text-primary-200 text-lg mb-8 max-w-2xl mx-auto">
            Don't wait. Contact the Law Brothers today for your free consultation. 
            We'll come to you, and there's no fee unless you win.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent-500 hover:bg-accent-600 text-primary-900 font-bold py-4 px-8 rounded-lg transition-colors duration-200 shadow-medium">
              Get Free Consultation
            </button>
            <div className="text-accent-400 font-bold text-xl py-4">
              (800) 222-2222
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-900 text-primary-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">Law Brothers</h3>
              <p className="text-primary-400 mb-4">
                Award-winning personal injury attorneys serving clients across California, Texas, and the West Coast.
              </p>
              <div className="text-accent-400 font-semibold">
                Over $500 Million Recovered
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Practice Areas</h4>
              <ul className="space-y-2 text-primary-400">
                <li>Personal Injury</li>
                <li>Vehicle Accidents</li>
                <li>Product Liability</li>
                <li>Wrongful Death</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-primary-400">
                <div>Beverly Hills Office:</div>
                <div>8370 Wilshire Blvd #205</div>
                <div>Beverly Hills, CA 90211</div>
                <div className="text-accent-400 font-semibold">(800) 222-2222</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-700 mt-8 pt-8 text-center text-primary-500">
            <p>&copy; 2024 Law Brothers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}