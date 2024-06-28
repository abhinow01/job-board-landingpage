import React from 'react';

const JobStats = () => {
  const stats = [
    { label: 'Applicants', value: 400 },
    { label: 'Matches', value: 100 },
    { label: 'Messages', value: 147 },
    { label: 'Views', value: 800 },
  ];

  return (
    <div className="w-full lg:w-1/3">
      <div className="bg-gray-100 p-4 rounded">
        <h2 className="font-semibold mb-2">Job Stats</h2>
        <div className="space-y-2">
          {stats.map((stat) => (
            <div key={stat.label} className="flex justify-between">
              <span>{stat.label}</span>
              <span className="font-semibold">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobStats;