import React from 'react';

const JobDetails = ({ onDelete, onEdit }) => {
  return (
    <div className="w-full lg:w-2/3 pr-0 lg:pr-4 mb-4 lg:mb-0">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <h1 className="text-2xl font-bold mb-2 sm:mb-0">Senior Product Designer</h1>
        <div className="flex space-x-2">
          <button
            onClick={onDelete}
            className="border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-100"
          >
            Delete Job
          </button>
          <button
            onClick={onEdit}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Edit job
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-center space-x-4 mb-4 text-gray-600">
        <span>📍 Delaware, USA</span>
        <span>💰 $300k-$400k</span>
      </div>
      <div className="mb-4">
        <h2 className="font-semibold mb-2">Skills Required</h2>
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-200 px-2 py-1 rounded">Figma</span>
          <span className="bg-gray-200 px-2 py-1 rounded">Adobe Illustrator</span>
          <span className="bg-gray-200 px-2 py-1 rounded">Adobe XD</span>
        </div>
      </div>
      {/* Add more job details here */}
    </div>
  );
};

export default JobDetails;