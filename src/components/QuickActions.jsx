import React from 'react';
import { Plus, MessageSquare, FileText, Calendar, Download, Users, Mail, Phone } from 'lucide-react';

const QuickActions = () => {
  const actions = [
    { icon: Plus, label: 'Add Student', color: 'from-blue-600 to-cyan-500' },
    { icon: MessageSquare, label: 'Send Message', color: 'from-green-600 to-emerald-500' },
    { icon: FileText, label: 'Generate Report', color: 'from-purple-600 to-pink-500' },
    { icon: Calendar, label: 'Schedule Meeting', color: 'from-orange-600 to-amber-500' },
    { icon: Download, label: 'Export Data', color: 'from-indigo-600 to-blue-500' },
    { icon: Users, label: 'Bulk Email', color: 'from-red-600 to-orange-500' },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-6">Quick Actions</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <button
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200"
            >
              <div className={`p-3 bg-gradient-to-r ${action.color} rounded-lg mb-3`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">{action.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;