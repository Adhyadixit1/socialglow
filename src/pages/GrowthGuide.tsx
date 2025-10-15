import React from 'react';

const GrowthGuide: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Social Media Growth Guide</h1>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-lg text-gray-700 mb-6">
            A comprehensive guide to growing your social media presence and achieving your marketing goals.
          </p>
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Chapter 1: Setting Your Foundation</h2>
              <p className="text-gray-600">
                Learn how to define your target audience, set clear objectives, and establish your brand voice.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Chapter 2: Content Strategy</h2>
              <p className="text-gray-600">
                Discover how to create a content calendar, choose the right formats, and optimize for each platform.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Chapter 3: Engagement & Growth</h2>
              <p className="text-gray-600">
                Master community building, influencer partnerships, and organic growth strategies.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Download the Complete Guide</h3>
              <p className="text-gray-600 mb-4">
                Get instant access to our 50-page comprehensive growth guide with actionable strategies and templates.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Download Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthGuide;
