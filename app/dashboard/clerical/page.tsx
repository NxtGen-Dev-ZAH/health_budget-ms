'use client';

export default function ClericalDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Clerical Staff Dashboard</h1>
        <p className="text-gray-500">Welcome back! Here's your overview for today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Records Processed', value: '128', change: '+12', icon: '📋' },
          { label: 'Stock Items', value: '456', change: '-8', icon: '📦' },
          { label: 'Pending Reports', value: '5', change: '+2', icon: '📊' },
          { label: 'Data Entries', value: '89', change: '+15', icon: '⌨️' },
        ].map((stat) => (
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

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pending Tasks */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Pending Tasks</h2>
          <div className="space-y-4">
            {[
              { title: 'Update patient records', priority: 'High', time: '2 hours' },
              { title: 'Process new admissions', priority: 'Medium', time: '3 hours' },
              { title: 'Generate weekly report', priority: 'Low', time: '5 hours' },
            ].map((task, i) => (
              <div key={i} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-indigo-600 rounded border-gray-300"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{task.title}</p>
                    <p className="text-xs text-gray-500">Due in {task.time}</p>
                  </div>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  task.priority === 'High'
                    ? 'bg-red-100 text-red-700'
                    : task.priority === 'Medium'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-green-100 text-green-700'
                }`}>
                  {task.priority}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stock Alerts */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Stock Alerts</h2>
          <div className="space-y-4">
            {[
              { item: 'Medical Forms', status: 'Low Stock', quantity: '50' },
              { item: 'Patient Cards', status: 'Reorder', quantity: '100' },
              { item: 'Filing Folders', status: 'Critical', quantity: '25' },
            ].map((alert, i) => (
              <div key={i} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    📦
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{alert.item}</p>
                    <p className="text-xs text-gray-500">Qty: {alert.quantity}</p>
                  </div>
                </div>
                <span className="text-xs font-medium text-red-600">{alert.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {[
              { action: 'Record Updated', detail: 'Patient #12345', time: '5m ago' },
              { action: 'Stock Checked', detail: 'Inventory #789', time: '15m ago' },
              { action: 'Report Generated', detail: 'Daily Summary', time: '1h ago' },
            ].map((activity, i) => (
              <div key={i} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                  {i === 0 ? '📋' : i === 1 ? '📦' : '📊'}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-gray-500">{activity.detail}</p>
                    <span className="text-xs text-gray-400">•</span>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Document Processing Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Document Processing</h2>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
            Process New
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm font-medium text-gray-500">
                <th className="pb-4 pr-4">Document ID</th>
                <th className="pb-4 pr-4">Type</th>
                <th className="pb-4 pr-4">Status</th>
                <th className="pb-4 pr-4">Submitted</th>
                <th className="pb-4">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                { id: 'DOC-001', type: 'Admission', status: 'Pending', date: 'Today' },
                { id: 'DOC-002', type: 'Discharge', status: 'Processing', date: 'Yesterday' },
                { id: 'DOC-003', type: 'Transfer', status: 'Completed', date: '2 days ago' },
              ].map((doc, i) => (
                <tr key={i} className="border-t border-gray-100">
                  <td className="py-4 pr-4 text-[#063]">{doc.id}</td>
                  <td className="py-4 pr-4 text-[#063] ">{doc.type}</td>
                  <td className="py-4 pr-4 ">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      doc.status === 'Completed'
                        ? 'bg-green-100 text-green-700'
                        : doc.status === 'Processing'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {doc.status}
                    </span>
                  </td>
                  <td className="py-4 pr-4 text-[#063]">{doc.date}</td>
                  <td className="py-4">
                    <button className="text-indigo-600 hover:text-indigo-800">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 