import React from 'react';

const FreeAudit: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Free Social Media Audit</h1>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-lg text-gray-700 mb-6">
            Get a comprehensive analysis of your current social media presence and receive actionable recommendations for improvement.
          </p>
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">What's Included</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Profile optimization analysis</li>
                <li>Content strategy review</li>
                <li>Engagement and growth metrics</li>
                <li>Competitor analysis</li>
                <li>Customized action plan</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Get Your Free Audit</h3>
              <p className="text-gray-600 mb-4">
                Fill out the form below and we'll analyze your social media presence within 48 hours.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Start Free Audit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeAudit;
