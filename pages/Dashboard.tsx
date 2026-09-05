import React from 'react';
import { Users, GraduationCap, BookOpen, DollarSign, TrendingUp, TrendingDown } from 'lucide-react';
import { StatCardProps } from '../types';

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, trend, trendUp }) => (
  <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 transition-all hover:shadow-md">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <h3 className="mt-1 text-2xl font-bold tracking-tight text-gray-900">{value}</h3>
      </div>
      <div className="rounded-full bg-indigo-50 p-3 text-indigo-600">
        {icon}
      </div>
    </div>
    {trend && (
      <div className="mt-4 flex items-center gap-2">
        <span className={`flex items-center text-xs font-medium ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
          {trendUp ? <TrendingUp size={14} className="mr-1" /> : <TrendingDown size={14} className="mr-1" />}
          {trend}
        </span>
        <span className="text-xs text-gray-500">vs last month</span>
      </div>
    )}
  </div>
);

const Dashboard: React.FC = () => {
  const stats: StatCardProps[] = [
    { title: 'Total Students', value: '2,845', icon: <Users size={24} />, trend: '12%', trendUp: true },
    { title: 'Total Teachers', value: '142', icon: <GraduationCap size={24} />, trend: '4%', trendUp: true },
    { title: 'Active Classes', value: '86', icon: <BookOpen size={24} />, trend: '2%', trendUp: false },
    { title: 'Revenue (YTD)', value: '$1.2M', icon: <DollarSign size={24} />, trend: '8.5%', trendUp: true },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="mt-1 text-sm text-gray-500">Welcome back! Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4 py-2 border-b border-gray-50 last:border-0">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <div>
                  <p className="text-sm font-medium text-gray-800">New student enrollment</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
              <div className="flex items-center gap-3">
                <div className="flex flex-col items-center rounded-lg bg-white p-2 shadow-sm text-center min-w-[3rem]">
                  <span className="text-xs font-bold text-red-500">OCT</span>
                  <span className="text-lg font-bold text-gray-900">24</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Parent-Teacher Meeting</p>
                  <p className="text-xs text-gray-500">09:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
              <div className="flex items-center gap-3">
                <div className="flex flex-col items-center rounded-lg bg-white p-2 shadow-sm text-center min-w-[3rem]">
                  <span className="text-xs font-bold text-indigo-500">NOV</span>
                  <span className="text-lg font-bold text-gray-900">02</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Science Fair 2024</p>
                  <p className="text-xs text-gray-500">All Day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;