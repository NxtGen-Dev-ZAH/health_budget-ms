'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { 
  MdDashboard, 
  MdPeople, 
  MdCalendarToday, 
  MdDescription,
  MdSupervisorAccount,
  MdInventory,
  MdPregnantWoman,
  MdLocalHospital,
  MdMedication,
  MdMenu,
  MdNotifications,
  MdPerson,
  MdClose
} from 'react-icons/md';
import { FaUserNurse } from 'react-icons/fa';

const sidebarItems = {
  common: [
    { name: 'Dashboard', href: '/dashboard/medical', icon: MdDashboard },
    { name: 'Patients', href: '/dashboard/medical/patients', icon: MdPeople },
    { name: 'Appointments', href: '/dashboard/medical/appointments', icon: MdCalendarToday },
    { name: 'Reports', href: '/dashboard/medical/reports', icon: MdDescription },
  ],
  SMO: [
    { name: 'Staff Management', href: '/dashboard/medical/staff', icon: MdSupervisorAccount },
    { name: 'Resource Allocation', href: '/dashboard/medical/resources', icon: MdInventory },
  ],
  WMO: [
    { name: 'Women\'s Health', href: '/dashboard/medical/womens-health', icon: FaUserNurse },
    { name: 'Maternity Care', href: '/dashboard/medical/maternity', icon: MdPregnantWoman },
  ],
  MO: [
    { name: 'General Practice', href: '/dashboard/medical/general', icon: MdLocalHospital },
    { name: 'Prescriptions', href: '/dashboard/medical/prescriptions', icon: MdMedication },
  ],
};

function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const searchParams = useSearchParams();
  const role = (searchParams.get('role') || 'smo').toUpperCase() as keyof typeof sidebarItems;

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
          {isSidebarOpen && <h2 className="text-xl font-semibold text-white">HMS Portal</h2>}
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
            className="text-white hover:text-[#B8CFC9] transition-colors"
          >
            {isSidebarOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>
        </div>
        
        <nav className="p-4 space-y-2">
          {sidebarItems.common.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 py-2 text-[#B8CFC9] rounded-lg hover:bg-[#063] hover:text-white group h-12 ${
                isSidebarOpen ? 'px-4' : 'px-1.5'
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
          
          <div className={`pt-4 mt-4 border-t border-[#B8CFC9]`}>
            {isSidebarOpen && (
              <p className="px-4 text-sm font-medium text-[#B8CFC9] uppercase mb-2">
                {role} Specific
              </p>
            )}
            {sidebarItems[role]?.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 py-2 text-[#B8CFC9] rounded-lg hover:bg-[#063] hover:text-white group h-12 ${
                  isSidebarOpen ? 'px-4' : 'px-1.5'
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
          </div>
        </nav>
      </aside>

      {/* Main content */}
      <div className={`p-4 transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-16'}`}>
        {/* Header */}
        <header className="bg-white shadow-sm rounded-lg p-4 mb-6">
          <div className="flex justify-end items-center">
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full hover:bg-[#B8CFC9] text-[#085928]">
                <MdNotifications size={24} />
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#B8CFC9] flex items-center justify-center text-[#085928]">
                  <MdPerson size={20} />
                </div>
                <span className="font-medium text-[#063]">{role}</span>
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

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#a5daad] flex items-center justify-center">
      <div className="text-[#085928] text-xl">Loading...</div>
    </div>}>
      <LayoutContent children={children} />
    </Suspense>
  );
} 