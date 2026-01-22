import React from 'react';
import StatsCard from '../components/StatsCard.jsx';
import StudentTable from '../components/StudentTable.jsx';
import PopularPrograms from '../components/PopularPrograms.jsx';
import UpcomingDeadlines from '../components/UpcomingDeadlines.jsx';
import StudentDestinations from '../components/StudentDestinations';
import QuickActions from '../components/QuickActions.jsx';
import { dashboardStats } from '../data/mockData.js';

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Education Consultancy Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400">Manage student applications and track study abroad progress</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((stat, index) => (
          <StatsCard key={index} stat={stat} />
        ))}
      </div>

      <StudentTable />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <PopularPrograms />
        <UpcomingDeadlines />
        <StudentDestinations />
      </div>

      <QuickActions />
    </div>
  );
};

export default Dashboard;