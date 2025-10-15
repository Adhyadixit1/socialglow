import React from 'react';

const CaseStudies: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Case Studies</h1>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-lg text-gray-700 mb-6">
            Explore our success stories and see how we've helped clients achieve their social media marketing goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">E-commerce Brand Growth</h3>
              <p className="text-gray-600 mb-4">
                Increased Instagram followers by 300% and doubled online sales for a fashion retailer.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Retail • Instagram</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Read More
                </button>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">B2B Lead Generation</h3>
              <p className="text-gray-600 mb-4">
                Generated 150+ qualified leads per month for a SaaS company through LinkedIn advertising.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">SaaS • LinkedIn</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
