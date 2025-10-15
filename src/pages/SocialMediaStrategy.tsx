import React from 'react';

const SocialMediaStrategy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Social Media Strategy</h1>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-lg text-gray-700 mb-6">
            Develop a comprehensive social media strategy tailored to your business goals and target audience.
          </p>
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Strategy Development</h2>
              <p className="text-gray-600">
                We help you create a data-driven social media strategy that aligns with your overall marketing objectives.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Platform Selection</h2>
              <p className="text-gray-600">
                Identify the most effective social media platforms for reaching your target audience.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Content Planning</h2>
              <p className="text-gray-600">
                Plan and schedule content that engages your audience and drives results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaStrategy;
