import React from 'react';

const Careers: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Careers</h1>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-lg text-gray-700 mb-6">
            Join our growing team and help shape the future of social media marketing.
          </p>
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Open Positions</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Social Media Manager</h3>
                  <p className="text-gray-600 mb-2">Full-time • Remote</p>
                  <p className="text-gray-600">Manage client social media accounts and develop content strategies.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Content Creator</h3>
                  <p className="text-gray-600 mb-2">Full-time • Hybrid</p>
                  <p className="text-gray-600">Create engaging content for various social media platforms.</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Why Work With Us?</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Competitive salary and benefits package</li>
                <li>Flexible working arrangements</li>
                <li>Opportunities for professional growth</li>
                <li>Collaborative and supportive team environment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
