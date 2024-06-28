import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-4">
      <div className="text-gray-500">Logo</div>
      <nav className="flex space-x-4">
        <button className="bg-red-500 text-white px-4 py-2 rounded">Jobs</button>
        <button className="text-gray-600 hover:text-gray-800">Messages</button>
        <button className="text-gray-600 hover:text-gray-800">Payments</button>
      </nav>
      <div className="flex items-center space-x-2">
        <span className="text-gray-600 cursor-pointer">🔔</span>
        <span className="text-blue-600 cursor-pointer">A▼</span>
      </div>
    </header>
  );
};

export default Header;