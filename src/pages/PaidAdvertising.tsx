import React from 'react';

const PaidAdvertising: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Paid Advertising</h1>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-lg text-gray-700 mb-6">
            Maximize your reach and ROI with targeted paid advertising campaigns across social media platforms.
          </p>
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Campaign Strategy</h2>
              <p className="text-gray-600">
                Develop comprehensive paid advertising strategies that align with your business objectives.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Targeting & Optimization</h2>
              <p className="text-gray-600">
                Use advanced targeting options and continuous optimization to maximize campaign performance.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Budget Management</h2>
              <p className="text-gray-600">
                Effectively manage advertising budgets to achieve the best possible results within your constraints.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaidAdvertising;
