'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  MdDashboard,
  MdAssignment,
  MdInventory,
  MdCalendarToday,
  MdBarChart,
  MdKeyboard,
  MdFolder,
  MdAdd,
  MdDescription,
  MdMenu,
  MdClose,
  MdNotifications,
  MdPerson
} from 'react-icons/md';

const sidebarItems = [
  { name: 'Dashboard', href: '/dashboard/clerical', icon: MdDashboard },
  { name: 'Patient Records', href: '/dashboard/clerical/records', icon: MdAssignment },
  { name: 'Stock Management', href: '/dashboard/clerical/stock', icon: MdInventory },
  { name: 'Daily Reports', href: '/dashboard/clerical/daily-reports', icon: MdCalendarToday },
  { name: 'Weekly Reports', href: '/dashboard/clerical/weekly-reports', icon: MdBarChart },
  { name: 'Data Entry', href: '/dashboard/clerical/data-entry', icon: MdKeyboard },
  { name: 'Document Management', href: '/dashboard/clerical/documents', icon: MdFolder },
];

export default function ClericalDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#a5daad]">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'w-64' : 'w-16'
        } bg-[#085928] border-r border-[#B8CFC9]`}
      >
        <div className={`flex items-center p-4 border-b border-[#B8CFC9] ${
          isSidebarOpen ? 'justify-between' : 'justify-center'
        }`}>
          {isSidebarOpen && (
            <div>
              <h2 className="text-xl font-semibold text-white">HMS Portal</h2>
              <p className="text-sm text-[#B8CFC9]">Clerical Dashboard</p>
            </div>
          )}
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-white hover:text-[#B8CFC9] transition-colors"
          >
            {isSidebarOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {sidebarItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 py-2 text-[#B8CFC9] rounded-lg hover:bg-[#063] hover:text-white group h-12 ${
                isSidebarOpen ? 'px-4' : ' px-1.5'
              }`}
            >
              <span className="min-w-[20px] flex items-center justify-center">
                <item.icon size={20} />
              </span>
              <span className={`transition-opacity duration-200 ${
                isSidebarOpen ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'
              }`}>
                {item.name}
              </span>
              {!isSidebarOpen && (
                <div className="absolute left-16 hidden group-hover:block bg-[#085928] text-white px-2 py-1 rounded ml-2 whitespace-nowrap z-50">
                  {item.name}
                </div>
              )}
            </Link>
          ))}
        </nav>

        {/* Quick Actions */}
        {isSidebarOpen ? (
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#B8CFC9] bg-[#063]">
            <h3 className="text-sm font-medium text-[#B8CFC9] mb-2">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-2">
              <button className="p-2 text-sm text-white bg-[#085928] rounded-lg border border-[#B8CFC9] hover:bg-[#063] flex items-center gap-2 justify-center">
                <MdAdd size={16} />
                <span>New Entry</span>
              </button>
              <button className="p-2 text-sm text-white bg-[#085928] rounded-lg border border-[#B8CFC9] hover:bg-[#063] flex items-center gap-2 justify-center">
                <MdDescription size={16} />
                <span>Report</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="absolute bottom-0 left-0 right-0 p-2 border-t border-[#B8CFC9] bg-[#063]">
            <div className="flex flex-col gap-2">
              <button className="p-2 text-white hover:bg-[#085928] rounded-lg flex items-center justify-center group relative">
                <span className="min-w-[20px] flex items-center justify-center">
                  <MdAdd size={20} />
                </span>
                <div className="absolute left-16 hidden group-hover:block bg-[#085928] text-white px-2 py-1 rounded ml-2 whitespace-nowrap z-50">
                  New Entry
                </div>
              </button>
              <button className="p-2 text-white hover:bg-[#085928] rounded-lg flex items-center justify-center group relative">
                <span className="min-w-[20px] flex items-center justify-center">
                  <MdDescription size={20} />
                </span>
                <div className="absolute left-16 hidden group-hover:block bg-[#085928] text-white px-2 py-1 rounded ml-2 whitespace-nowrap z-50">
                  Generate Report
                </div>
              </button>
            </div>
          </div>
        )}
      </aside>

      {/* Main content */}
      <div className={`p-4 transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-16'}`}>
        {/* Header */}
        <header className="bg-white shadow-sm rounded-lg p-4 mb-6">
          <div className="flex justify-end items-center">
            {/* <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg hover:bg-[#B8CFC9] text-[#085928]"
            >
              <MdMenu size={24} />
            </button> */}
            <div className="flex items-center gap-4">
              {/* Notifications */}
              <div className="relative">
                <button className="p-2 rounded-full hover:bg-[#B8CFC9] text-[#085928]">
                  <MdNotifications size={24} />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
              </div>
              
              {/* Tasks Counter */}
              <div className="px-3 py-1 bg-[#B8CFC9] rounded-full text-sm text-[#063]">
                5 pending tasks
              </div>

              {/* User Profile */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#B8CFC9] flex items-center justify-center text-[#085928]">
                  <MdPerson size={20} />
                </div>
                <span className="font-medium text-[#063]">Clerical Staff</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="bg-white rounded-lg shadow-sm p-6">
          {children}
        </main>
      </div>
    </div>
  );
} 