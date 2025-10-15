import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-lg text-gray-700 mb-6">
            Learn about our mission, values, and the passionate team behind Social Glow.
          </p>
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h2>
              <p className="text-gray-600">
                To empower businesses of all sizes to achieve their social media marketing goals through innovative strategies and exceptional service.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Story</h2>
              <p className="text-gray-600">
                Founded in 2020, Social Glow has grown from a small startup to a leading social media marketing agency, helping hundreds of clients succeed online.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Values</h2>
              <p className="text-gray-600">
                Innovation, transparency, results-driven approach, and building long-term partnerships with our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
