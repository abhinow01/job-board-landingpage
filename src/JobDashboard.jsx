import React, { useState } from 'react';
import Header from './Header';
import JobNavigation from './JobNavigation';
import JobDetails from './JobDetails';
import JobStats from './JobStats';

const JobDashboard = () => {
  const [activeTab, setActiveTab] = useState('Job preview');

  const handleDelete = () => {
    alert('Delete job clicked');
    // Implement delete logic here
  };

  const handleEdit = () => {
    alert('Edit job clicked');
    // Implement edit logic here
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <Header />
      <JobNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex flex-col lg:flex-row">
        <JobDetails onDelete={handleDelete} onEdit={handleEdit} />
        <JobStats />
      </main>
    </div>
  );
};

export default JobDashboard;