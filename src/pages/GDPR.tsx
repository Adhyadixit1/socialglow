import React from 'react';

const GDPR: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">GDPR Compliance</h1>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-lg text-gray-700 mb-6">
            Social Glow is committed to protecting your personal data and complying with the General Data Protection Regulation (GDPR).
          </p>
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Your Rights Under GDPR</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Right to Access:</strong> Request access to your personal data</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Right to Restriction:</strong> Request limitation of data processing</li>
                <li><strong>Right to Portability:</strong> Request transfer of your data</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Data Processing</h2>
              <p className="text-gray-600">
                We process personal data only for legitimate business purposes and with appropriate safeguards. We implement technical and organizational measures to ensure data security.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about GDPR compliance or wish to exercise your rights, please contact our Data Protection Officer at privacy@socialglow.com.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Data Subject Request Form</h3>
              <p className="text-gray-600 mb-4">
                Submit a request to exercise your GDPR rights by filling out our secure form.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GDPR;
