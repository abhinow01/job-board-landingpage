import React from 'react'

const JobDashboard = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <header className="flex justify-between items-center mb-4">
        <div className="text-gray-500">Logo</div>
        <nav className="flex space-x-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded">Jobs</button>
          <button className="text-gray-600">Messages</button>
          <button className="text-gray-600">Payments</button>
        </nav>
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">🔔</span>
          <span className="text-blue-600">A▼</span>
        </div>
      </header>

      <nav className="flex border-b mb-4">
        <button className="text-red-500 border-b-2 border-red-500 px-4 py-2">Job preview</button>
        <button className="text-gray-600 px-4 py-2">Applicants</button>
        <button className="text-gray-600 px-4 py-2">Match</button>
        <button className="text-gray-600 px-4 py-2">Messages</button>
      </nav>

      <main className="flex">
        <div className="w-2/3 pr-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Senior Product Designer</h1>
            <div className="flex space-x-2">
              <button className="border border-red-500 text-red-500 px-4 py-2 rounded">Delete Job</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded">Edit job</button>
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-4 text-gray-600">
            <span>📍 Delaware, USA</span>
            <span>💰 $300k-$400k</span>
          </div>
          <div className="mb-4">
            <h2 className="font-semibold mb-2">Skills Required</h2>
            <div className="flex space-x-2">
              <span className="bg-gray-200 px-2 py-1 rounded">Figma</span>
              <span className="bg-gray-200 px-2 py-1 rounded">Adobe Illustrator</span>
              <span className="bg-gray-200 px-2 py-1 rounded">Adobe XD</span>
            </div>
          </div>
          {/* Add more job details here */}
        </div>
        <div className="w-1/3">
          <div className="bg-gray-100 p-4 rounded">
            <h2 className="font-semibold mb-2">Job Stats</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Applicants</span>
                <span className="font-semibold">400</span>
              </div>
              <div className="flex justify-between">
                <span>Matches</span>
                <span className="font-semibold">100</span>
              </div>
              <div className="flex justify-between">
                <span>Messages</span>
                <span className="font-semibold">147</span>
              </div>
              <div className="flex justify-between">
                <span>Views</span>
                <span className="font-semibold">800</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default JobDashboard