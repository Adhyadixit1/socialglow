import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Newsletter</h1>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-lg text-gray-700 mb-6">
            Subscribe to our newsletter for the latest social media marketing tips, trends, and exclusive content.
          </p>
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">What You'll Receive</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Weekly social media marketing tips and strategies</li>
                <li>Industry news and trend updates</li>
                <li>Exclusive case studies and success stories</li>
                <li>Early access to webinars and resources</li>
                <li>Special offers and discounts on our services</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Subscribe Now</h3>
              <p className="text-gray-600 mb-4">
                Join thousands of marketers who trust Social Glow for their social media insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
