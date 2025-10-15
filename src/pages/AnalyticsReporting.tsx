import React from 'react';

const AnalyticsReporting: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Analytics & Reporting</h1>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-lg text-gray-700 mb-6">
            Track, analyze, and report on your social media performance to make data-driven decisions and optimize results.
          </p>
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Performance Metrics</h2>
              <p className="text-gray-600">
                Monitor key performance indicators including engagement, reach, conversions, and ROI.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Custom Dashboards</h2>
              <p className="text-gray-600">
                Create customized dashboards that provide insights tailored to your specific goals and KPIs.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Monthly Reports</h2>
              <p className="text-gray-600">
                Receive comprehensive monthly reports with actionable insights and recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsReporting;
