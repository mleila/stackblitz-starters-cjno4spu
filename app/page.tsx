import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <header className="bg-blue-800 text-white w-full py-4 shadow-md">
        <h1 className="text-3xl font-bold text-center">The Law Brothers Law Firm</h1>
      </header>
      
      <main className="flex-1 w-full max-w-4xl mx-auto p-6">
        <section className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Involved in a Motor Vehicle Accident?</h2>
          <p className="text-gray-700 mb-4">
            At The Law Brothers, we specialize in motor vehicle accident cases. Our experienced attorneys are dedicated to ensuring you receive the compensation you deserve.
          </p>
          <p className="text-gray-700 mb-4">
            We understand the stress and confusion that can follow an accident. Let us handle the legal complexities while you focus on recovery.
          </p>
          <button className="mt-4 bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-700">
            Contact Us Today
          </button>
        </section>
      </main>
      
      <footer className="bg-blue-800 text-white w-full py-4 text-center">
        <p>&copy; 2023 The Law Brothers Law Firm. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
