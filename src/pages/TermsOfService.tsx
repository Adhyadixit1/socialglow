import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-lg text-gray-700 mb-6">
            Last updated: December 15, 2023
          </p>
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing and using Social Glow's services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Services</h2>
              <p className="text-gray-600">
                Social Glow provides social media marketing and management services as described on our website and in our service agreements.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">User Responsibilities</h2>
              <p className="text-gray-600">
                You agree to provide accurate information, cooperate with our team, and use our services in compliance with applicable laws and regulations.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Limitation of Liability</h2>
              <p className="text-gray-600">
                Social Glow's liability shall not exceed the amount paid by you for our services. We are not liable for indirect, incidental, or consequential damages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
