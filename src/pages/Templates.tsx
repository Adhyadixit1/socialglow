import React from 'react';

const Templates: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Templates</h1>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-lg text-gray-700 mb-6">
            Download our professionally designed templates to streamline your social media marketing efforts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Social Media Calendar Template</h3>
              <p className="text-gray-600 mb-4">
                Plan and organize your social media content with our comprehensive calendar template.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Download
              </button>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Content Creation Checklist</h3>
              <p className="text-gray-600 mb-4">
                Ensure every piece of content meets our quality standards with this detailed checklist.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Download
              </button>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Analytics Dashboard Template</h3>
              <p className="text-gray-600 mb-4">
                Track your social media performance with our customizable analytics dashboard.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;
