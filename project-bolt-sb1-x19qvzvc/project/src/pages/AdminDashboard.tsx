import React from 'react';
import { BarChart, Users, DollarSign, TrendingUp } from 'lucide-react';
import { AdminStats } from '../types';

// Mock data for demonstration
const mockStats: AdminStats = {
  totalUsers: 1250,
  activeSubscriptions: 850,
  monthlyRevenue: 8500,
  popularMovies: [
    { movieId: 1, views: 1200 },
    { movieId: 2, views: 980 },
    { movieId: 3, views: 850 }
  ]
};

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Stats Cards */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-400">Total Users</h3>
              <Users className="h-6 w-6 text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-white">{mockStats.totalUsers}</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-400">Active Subscriptions</h3>
              <BarChart className="h-6 w-6 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-white">{mockStats.activeSubscriptions}</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-400">Monthly Revenue</h3>
              <DollarSign className="h-6 w-6 text-yellow-500" />
            </div>
            <p className="text-3xl font-bold text-white">${mockStats.monthlyRevenue}</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-400">Growth Rate</h3>
              <TrendingUp className="h-6 w-6 text-purple-500" />
            </div>
            <p className="text-3xl font-bold text-white">+15%</p>
          </div>
        </div>

        {/* Configuration Section */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Quick Settings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
              <span className="text-gray-300">Maintenance Mode</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
              <span className="text-gray-300">New Registrations</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
              <span className="text-gray-300">Email Notifications</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Documentation */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Documentation</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-4">
              This admin dashboard provides complete control over your movie streaming platform. Key features include:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>User management and analytics</li>
              <li>Subscription tracking and revenue monitoring</li>
              <li>Content management system</li>
              <li>Payment processing integration</li>
              <li>Email notification system</li>
              <li>API documentation and integration guides</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}