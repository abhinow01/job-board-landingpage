import React from 'react';

const JobNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = ['Job preview', 'Applicants', 'Match', 'Messages'];

  return (
    <nav className="flex border-b mb-4 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 whitespace-nowrap ${
            activeTab === tab
              ? 'text-red-500 border-b-2 border-red-500'
              : 'text-gray-600 hover:text-gray-800'
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};

export default JobNavigation;