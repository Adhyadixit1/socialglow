import React from 'react';

const CommunityManagement: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Community Management</h1>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-lg text-gray-700 mb-6">
            Build and nurture a loyal community around your brand through active engagement and relationship building.
          </p>
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Engagement Strategies</h2>
              <p className="text-gray-600">
                Develop strategies to actively engage with your audience and foster meaningful interactions.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Moderation</h2>
              <p className="text-gray-600">
                Maintain a positive and safe community environment through effective moderation practices.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">User-Generated Content</h2>
              <p className="text-gray-600">
                Encourage and leverage user-generated content to build community and authenticity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityManagement;
