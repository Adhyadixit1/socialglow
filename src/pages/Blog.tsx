import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-lg text-gray-700 mb-6">
            Stay updated with the latest trends, tips, and insights in social media marketing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">10 Social Media Trends for 2024</h3>
              <p className="text-gray-600 mb-4">
                Discover the emerging trends that will shape social media marketing in the coming year.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Dec 15, 2023</span>
                <button className="text-blue-600 hover:text-blue-800">Read More</button>
              </div>
            </article>
            <article className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">How to Create Engaging Instagram Reels</h3>
              <p className="text-gray-600 mb-4">
                Learn the secrets to creating Instagram Reels that capture attention and drive engagement.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Dec 10, 2023</span>
                <button className="text-blue-600 hover:text-blue-800">Read More</button>
              </div>
            </article>
            <article className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Measuring Social Media ROI</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive guide to tracking and measuring the return on investment of your social media efforts.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Dec 5, 2023</span>
                <button className="text-blue-600 hover:text-blue-800">Read More</button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
