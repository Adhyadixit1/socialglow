import React from 'react';

const ContentCreation: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Content Creation</h1>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-lg text-gray-700 mb-6">
            Create engaging, high-quality content that resonates with your audience and drives engagement.
          </p>
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Content Types</h2>
              <p className="text-gray-600">
                From blog posts and videos to infographics and social media content, we create diverse content formats.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Brand Voice</h2>
              <p className="text-gray-600">
                Develop a consistent brand voice that reflects your company's personality and values.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Visual Design</h2>
              <p className="text-gray-600">
                Create visually appealing graphics and designs that capture attention and enhance your message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCreation;
