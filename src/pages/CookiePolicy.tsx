import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-lg text-gray-700 mb-6">
            Last updated: December 15, 2023
          </p>
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">What Are Cookies</h2>
              <p className="text-gray-600">
                Cookies are small text files that are stored on your computer or mobile device when you visit our website. They allow us to remember your preferences and improve your browsing experience.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">How We Use Cookies</h2>
              <p className="text-gray-600">
                We use cookies to enhance website functionality, analyze site traffic, and provide personalized content. Some cookies are necessary for the website to function properly.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Types of Cookies We Use</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Managing Cookies</h2>
              <p className="text-gray-600">
                You can control and manage cookies through your browser settings. However, disabling certain cookies may affect website functionality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
