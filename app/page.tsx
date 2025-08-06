import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-900 text-white py-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-4xl font-bold">The Law Brothers Law Firm</h1>
          <nav>
            <a href="#services" className="text-lg mx-2 hover:underline">Services</a>
            <a href="#testimonials" className="text-lg mx-2 hover:underline">Testimonials</a>
            <a href="#contact" className="text-lg mx-2 hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-cover bg-center h-96" style={{ backgroundImage: "url('https://example.com/hero-image.jpg')" }}>
          <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Involved in a Motor Vehicle Accident?</h2>
              <p className="text-lg md:text-2xl mb-6">Let our experienced attorneys fight for your rights.</p>
              <button className="bg-blue-800 text-white py-3 px-6 rounded-lg hover:bg-blue-700">Get a Free Consultation</button>
            </div>
          </div>
        </section>

        <section id="services" className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <h3 className="text-2xl font-bold text-center mb-8">Our Services</h3>
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-1/3 p-4">
                <div className="bg-gray-200 p-6 rounded-lg shadow-lg text-center">
                  <h4 className="text-xl font-bold mb-2">Personal Injury</h4>
                  <p>We handle all types of personal injury cases with dedication and expertise.</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-4">
                <div className="bg-gray-200 p-6 rounded-lg shadow-lg text-center">
                  <h4 className="text-xl font-bold mb-2">Motor Vehicle Accidents</h4>
                  <p>Our team specializes in motor vehicle accident cases to ensure you get the compensation you deserve.</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-4">
                <div className="bg-gray-200 p-6 rounded-lg shadow-lg text-center">
                  <h4 className="text-xl font-bold mb-2">Workplace Injuries</h4>
                  <p>We provide legal assistance for workplace injury claims to protect your rights.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-12 bg-gray-100">
          <div className="container mx-auto px-6">
            <h3 className="text-2xl font-bold text-center mb-8">What Our Clients Say</h3>
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-1/2 p-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <p className="italic">"The Law Brothers helped me get the settlement I deserved after my accident. Highly recommend!"</p>
                  <p className="mt-4 text-right font-bold">- John Doe</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <p className="italic">"Professional and compassionate service. They took care of everything!"</p>
                  <p className="mt-4 text-right font-bold">- Jane Smith</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <h3 className="text-2xl font-bold text-center mb-8">Contact Us</h3>
            <form className="max-w-lg mx-auto">
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" className="w-full px-4 py-2 border rounded-lg" placeholder="Your Email" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea className="w-full px-4 py-2 border rounded-lg" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="bg-blue-800 text-white py-3 px-6 rounded-lg hover:bg-blue-700">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 text-white py-4 text-center">
        <p>&copy; 2023 The Law Brothers Law Firm. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
