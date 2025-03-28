'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const roleSpecificContent = {
  smo: {
    title: 'Senior Medical Officer Dashboard',
    stats: [
      { label: 'Total Staff', value: '45', change: '+2', icon: '👥' },
      { label: 'Patients Today', value: '128', change: '+12', icon: '🏥' },
      { label: 'Resource Usage', value: '86%', change: '-2%', icon: '📊' },
      { label: 'Critical Cases', value: '3', change: '-1', icon: '🚨' },
    ],
  },
  wmo: {
    title: 'Women Medical Officer Dashboard',
    stats: [
      { label: 'Patients Today', value: '42', change: '+8', icon: '👩' },
      { label: 'Maternity Cases', value: '12', change: '+2', icon: '🤰' },
      { label: 'Scheduled Checkups', value: '28', change: '+5', icon: '📅' },
      { label: 'Critical Cases', value: '1', change: '0', icon: '🚨' },
    ],
  },
  mo: {
    title: 'Medical Officer Dashboard',
    stats: [
      { label: 'Patients Today', value: '56', change: '+15', icon: '👥' },
      { label: 'Prescriptions', value: '38', change: '+10', icon: '💊' },
      { label: 'Lab Tests', value: '24', change: '+6', icon: '🔬' },
      { label: 'Follow-ups', value: '18', change: '+3', icon: '📋' },
    ],
  },
};

function DashboardContent() {
  const searchParams = useSearchParams();
  const role = searchParams.get('role') || 'smo';
  const content = roleSpecificContent[role as keyof typeof roleSpecificContent];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{content.title}</h1>
        <p className="text-gray-500">Welcome back! Here's your overview for today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {content.stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl">{stat.icon}</span>
              <span className={`text-sm font-medium ${
                stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
              }`}>
                {stat.change}
              </span>
            </div>
            <p className="text-gray-500 text-sm">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                {i === 1 ? '📋' : i === 2 ? '💊' : '🏥'}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {i === 1
                    ? 'Patient consultation completed'
                    : i === 2
                    ? 'New prescription issued'
                    : 'Lab results reviewed'}
                </p>
                <p className="text-sm text-gray-500">{i * 10} minutes ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Appointments</h2>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    👤
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#063]">Patient #{i}</p>
                    <p className="text-xs text-gray-500">General Checkup</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{i + 1}:00 PM</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Tasks</h2>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-indigo-600 rounded border-gray-300"
                />
                <span className="text-sm text-gray-700">
                  {i === 1
                    ? 'Review lab results'
                    : i === 2
                    ? 'Update patient records'
                    : 'Complete daily report'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MedicalDashboard() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardContent />
    </Suspense>
  );
} 