import React from 'react';

const FifthSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-16 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold">Stay Updated</h2>
        <p className="text-lg">
          Subscribe to our newsletter for the latest updates on our AI tools and offers.
        </p>
        <form className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
      <footer className="mt-16 w-full bg-gray-800">
        <div className="container mx-auto py-10 px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-xl font-semibold">ARTIFICIAL AGENTIVE LAB</h3>
              <p className="text-sm">AI-driven tools for your daily easy use.</p>
            </div>
            <div className="text-center">
              <p className="text-sm">&copy; 2024 Artificial Agentive Lab. All rights reserved.</p>
            </div>
            <div className="mt-6 md:mt-0 text-center md:text-right">
              <a href="#" className="text-white hover:underline mx-2">Privacy Policy</a>
              <a href="#" className="text-white hover:underline mx-2">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FifthSection;
