import React from 'react';

const Webinars: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Webinars</h1>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-lg text-gray-700 mb-6">
            Join our expert-led webinars on the latest social media marketing strategies and trends.
          </p>
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">TikTok Marketing Mastery</h3>
              <p className="text-gray-600 mb-4">
                Learn how to leverage TikTok's algorithm and create viral content that drives real results.
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">January 25, 2024 • 2:00 PM EST</p>
                  <p className="text-sm text-gray-500">Duration: 60 minutes</p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Register Now
                </button>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Instagram Growth Hacks</h3>
              <p className="text-gray-600 mb-4">
                Discover proven strategies to rapidly grow your Instagram following and engagement.
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">February 10, 2024 • 1:00 PM EST</p>
                  <p className="text-sm text-gray-500">Duration: 45 minutes</p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webinars;
