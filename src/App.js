import React, { useState } from 'react';
import { 
  GraduationCap, 
  Users, 
  Calendar, 
  MessageSquare, 
  FileText, 
  DollarSign,
  Globe,
  Search,
  Bell,
  User,
  Filter,
  Download,
  Eye,
  Edit,
  Phone,
  Mail,
  MapPin,
  Flag,
  BookOpen,
  Award,
  Clock,
  TrendingUp,
  MoreVertical,
  Plus,
  CheckCircle,
  XCircle,
  Clock4
} from 'lucide-react';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('active');

  // Mock data for Nepal-based education consultancy
  const dashboardStats = [
    { 
      label: 'Total Students', 
      value: '1,248', 
      change: '+18%', 
      icon: Users,
      color: 'from-blue-600 to-cyan-500',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
      description: 'Enrolled students'
    },
    { 
      label: 'Applications', 
      value: '342', 
      change: '+12%', 
      icon: FileText,
      color: 'from-emerald-600 to-green-500',
      bgColor: 'bg-emerald-100 dark:bg-emerald-900/30',
      description: 'Processing'
    },
    { 
      label: 'Visa Success Rate', 
      value: '94%', 
      change: '+2%', 
      icon: Award,
      color: 'from-amber-600 to-orange-500',
      bgColor: 'bg-amber-100 dark:bg-amber-900/30',
      description: 'This year'
    },
    { 
      label: 'Revenue', 
      value: '₨ 12.8M', 
      change: '+22%', 
      icon: DollarSign,
      color: 'from-purple-600 to-pink-500',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
      description: 'YTD'
    },
  ];

  // Student data for education consultancy
  const students = [
    {
      id: 1,
      name: 'Aarav Sharma',
      program: 'MS Computer Science',
      university: 'University of Melbourne',
      country: 'Australia',
      email: 'aarav.sharma@email.com',
      phone: '+977-9841XXXXXX',
      status: 'active',
      stage: 'Visa Approved',
      location: 'Kathmandu',
      lastUpdate: '2 days ago',
      applicationDate: '2024-01-15',
      intake: 'Feb 2024'
    },
    {
      id: 2,
      name: 'Priya Maharjan',
      program: 'MBA',
      university: 'University of Toronto',
      country: 'Canada',
      email: 'priya.m@email.com',
      phone: '+977-9813XXXXXX',
      status: 'pending',
      stage: 'Documentation',
      location: 'Pokhara',
      lastUpdate: 'Yesterday',
      applicationDate: '2024-01-20',
      intake: 'Sep 2024'
    },
    {
      id: 3,
      name: 'Rohan Gurung',
      program: 'BSc Engineering',
      university: 'University of Leeds',
      country: 'UK',
      email: 'rohan.g@email.com',
      phone: '+977-9851XXXXXX',
      status: 'active',
      stage: 'Offer Received',
      location: 'Chitwan',
      lastUpdate: 'Today',
      applicationDate: '2024-01-10',
      intake: 'Jan 2024'
    },
    {
      id: 4,
      name: 'Sita Karki',
      program: 'MSc Data Science',
      university: 'University of British Columbia',
      country: 'Canada',
      email: 'sita.k@email.com',
      phone: '+977-9801XXXXXX',
      status: 'rejected',
      stage: 'Visa Rejected',
      location: 'Biratnagar',
      lastUpdate: '3 days ago',
      applicationDate: '2023-12-15',
      intake: 'May 2024'
    },
    {
      id: 5,
      name: 'Bikram Thapa',
      program: 'BBA',
      university: 'Monash University',
      country: 'Australia',
      email: 'bikram.t@email.com',
      phone: '+977-9860XXXXXX',
      status: 'active',
      stage: 'Under Review',
      location: 'Kathmandu',
      lastUpdate: '1 hour ago',
      applicationDate: '2024-01-18',
      intake: 'Jul 2024'
    },
    {
      id: 6,
      name: 'Anita Shrestha',
      program: 'PhD Physics',
      university: 'University of Auckland',
      country: 'New Zealand',
      email: 'anita.s@email.com',
      phone: '+977-9822XXXXXX',
      status: 'pending',
      stage: 'Interview Scheduled',
      location: 'Lalitpur',
      lastUpdate: '2 days ago',
      applicationDate: '2024-01-05',
      intake: 'Mar 2024'
    },
  ];

  // Popular destinations
  const destinations = [
    { country: 'Australia', students: 320, color: 'bg-gradient-to-r from-red-500 to-blue-500' },
    { country: 'Canada', students: 285, color: 'bg-gradient-to-r from-red-600 to-white' },
    { country: 'UK', students: 198, color: 'bg-gradient-to-r from-blue-800 to-red-800' },
    { country: 'USA', students: 175, color: 'bg-gradient-to-r from-blue-600 to-red-600' },
    { country: 'New Zealand', students: 95, color: 'bg-gradient-to-r from-blue-900 to-red-700' },
  ];

  // Popular programs
  const programs = [
    { name: 'Computer Science', count: 245, color: 'bg-blue-500' },
    { name: 'Business Administration', count: 189, color: 'bg-green-500' },
    { name: 'Engineering', count: 156, color: 'bg-purple-500' },
    { name: 'Health Sciences', count: 98, color: 'bg-red-500' },
    { name: 'Data Science', count: 76, color: 'bg-amber-500' },
  ];

  // Upcoming deadlines
  const deadlines = [
    { university: 'University of Sydney', program: 'Masters', deadline: 'Feb 15, 2024', status: 'urgent' },
    { university: 'University of Toronto', program: 'Undergraduate', deadline: 'Mar 1, 2024', status: 'warning' },
    { university: 'University of Manchester', program: 'PhD', deadline: 'Mar 10, 2024', status: 'normal' },
    { university: 'Monash University', program: 'Diploma', deadline: 'Feb 28, 2024', status: 'urgent' },
  ];

  const statusBadge = (status) => {
    const styles = {
      active: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      rejected: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
    };
    return (
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${styles[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const stageBadge = (stage) => {
    const colors = {
      'Visa Approved': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200',
      'Documentation': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'Offer Received': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      'Visa Rejected': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      'Under Review': 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
      'Interview Scheduled': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
    };
    return (
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors[stage] || 'bg-gray-100 text-gray-800'}`}>
        {stage}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      {/* Top Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Himalayan Education Consultants</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Study Abroad CRM - Kathmandu, Nepal</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search students, programs..."
                className="pl-10 pr-4 py-2 w-64 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 relative">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white font-semibold">
                RS
              </div>
              <div>
                <p className="font-medium">Rajesh Shrestha</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Senior Counselor</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        {sidebarOpen && (
          <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 min-h-[calc(100vh-73px)] p-6">
            <div className="mb-8">
              <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Dashboard</h2>
              <nav className="space-y-1">
                {[
                  { icon: <GraduationCap className="w-5 h-5" />, label: 'Overview', active: true },
                  { icon: <Users className="w-5 h-5" />, label: 'Students', count: '1,248' },
                  { icon: <Calendar className="w-5 h-5" />, label: 'Appointments', count: '18' },
                  { icon: <FileText className="w-5 h-5" />, label: 'Applications' },
                  { icon: <MessageSquare className="w-5 h-5" />, label: 'Communications', count: '42' },
                  { icon: <DollarSign className="w-5 h-5" />, label: 'Payments' },
                  { icon: <Globe className="w-5 h-5" />, label: 'Universities' },
                  { icon: <TrendingUp className="w-5 h-5" />, label: 'Reports' },
                ].map((item, index) => (
                  <button
                    key={index}
                    className={`flex items-center justify-between w-full p-3 rounded-lg transition duration-200 ${
                      item.active 
                        ? 'bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800' 
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                    {item.count && (
                      <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs px-2 py-1 rounded">
                        {item.count}
                      </span>
                    )}
                  </button>
                ))}
              </nav>
            </div>

            <div className="mb-8">
              <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Top Destinations</h2>
              <div className="space-y-2">
                {destinations.slice(0, 3).map((dest, index) => (
                  <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                    <div className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded ${dest.color} flex items-center justify-center`}>
                        <Flag className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm font-medium">{dest.country}</span>
                    </div>
                    <span className="text-sm font-semibold">{dest.students}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-lg font-medium hover:opacity-90 transition duration-200 flex items-center justify-center space-x-2 shadow-md">
              <Plus className="w-5 h-5" />
              <span>Add New Student</span>
            </button>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="container mx-auto">
            {/* Header */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h1 className="text-2xl font-bold mb-2">Education Consultancy Dashboard</h1>
                  <p className="text-gray-600 dark:text-gray-400">Manage student applications and track study abroad progress</p>
                </div>
                <div className="flex space-x-3 mt-4 md:mt-0">
                  <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center space-x-2">
                    <Filter className="w-5 h-5" />
                    <span>Filter</span>
                  </button>
                  <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Export</span>
                  </button>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:opacity-90 flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>Schedule</span>
                  </button>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dashboardStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                          <Icon className={`w-8 h-8 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
                        </div>
                        <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                          {stat.change}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                      <p className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Students Table */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-8">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold">Student Applications</h2>
                    <p className="text-gray-600 dark:text-gray-400">Track and manage all student applications</p>
                  </div>
                  <div className="flex space-x-2 mt-4 md:mt-0">
                    {['active', 'pending', 'rejected', 'all'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 rounded-lg font-medium transition duration-200 ${
                          activeTab === tab
                            ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wider border-b border-gray-200 dark:border-gray-700">
                        <th className="pb-4 font-semibold">Student</th>
                        <th className="pb-4 font-semibold">Program & University</th>
                        <th className="pb-4 font-semibold">Destination</th>
                        <th className="pb-4 font-semibold">Status</th>
                        <th className="pb-4 font-semibold">Application Stage</th>
                        <th className="pb-4 font-semibold">Intake</th>
                        <th className="pb-4 font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {students
                        .filter(student => activeTab === 'all' || student.status === activeTab)
                        .map((student) => (
                          <tr key={student.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition duration-200">
                            <td className="py-4">
                              <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                                  {student.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                  <p className="font-semibold">{student.name}</p>
                                  <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center space-x-1">
                                    <MapPin className="w-3 h-3" />
                                    <span>{student.location}, Nepal</span>
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="py-4">
                              <div>
                                <p className="font-medium">{student.program}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{student.university}</p>
                              </div>
                            </td>
                            <td className="py-4">
                              <div className="flex items-center space-x-2">
                                <div className={`w-8 h-8 rounded flex items-center justify-center ${
                                  student.country === 'Australia' ? 'bg-gradient-to-r from-red-500 to-blue-500' :
                                  student.country === 'Canada' ? 'bg-gradient-to-r from-red-600 to-white' :
                                  student.country === 'UK' ? 'bg-gradient-to-r from-blue-800 to-red-800' :
                                  'bg-gradient-to-r from-blue-600 to-red-600'
                                }`}>
                                  <Flag className="w-4 h-4 text-white" />
                                </div>
                                <span className="font-medium">{student.country}</span>
                              </div>
                            </td>
                            <td className="py-4">
                              {statusBadge(student.status)}
                            </td>
                            <td className="py-4">
                              {stageBadge(student.stage)}
                            </td>
                            <td className="py-4">
                              <div>
                                <p className="font-medium">{student.intake}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Applied: {student.applicationDate}</p>
                              </div>
                            </td>
                            <td className="py-4">
                              <div className="flex items-center space-x-2">
                                <button className="p-2 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded" title="View Details">
                                  <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                </button>
                                <button className="p-2 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 rounded" title="Edit">
                                  <Edit className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                </button>
                                <button className="p-2 hover:bg-green-100 dark:hover:bg-green-900/30 rounded" title="Call">
                                  <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
                                </button>
                                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded" title="More">
                                  <MoreVertical className="w-5 h-5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Bottom Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Popular Programs */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Popular Programs</h2>
                  <BookOpen className="w-6 h-6 text-blue-500" />
                </div>
                <div className="space-y-4">
                  {programs.map((program, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${program.color}`}></div>
                          <span className="font-medium">{program.name}</span>
                        </div>
                        <span className="font-semibold">{program.count} students</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${program.color} rounded-full`}
                          style={{ width: `${(program.count / Math.max(...programs.map(p => p.count))) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Deadlines */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Upcoming Deadlines</h2>
                  <Clock className="w-6 h-6 text-amber-500" />
                </div>
                <div className="space-y-4">
                  {deadlines.map((deadline, index) => (
                    <div key={index} className={`p-4 rounded-lg border ${
                      deadline.status === 'urgent' ? 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20' :
                      deadline.status === 'warning' ? 'border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20' :
                      'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/20'
                    }`}>
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-semibold">{deadline.university}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{deadline.program} Program</p>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                          deadline.status === 'urgent' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                          deadline.status === 'warning' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200' :
                          'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                        }`}>
                          {deadline.deadline}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Student Destinations */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Student Destinations</h2>
                  <Globe className="w-6 h-6 text-emerald-500" />
                </div>
                <div className="space-y-4">
                  {destinations.map((dest, index) => (
                    <div key={index} className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition duration-200">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded ${dest.color} flex items-center justify-center`}>
                            <Flag className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold">{dest.country}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Popular destination</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold">{dest.students}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">students</p>
                        </div>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${dest.color} rounded-full`}
                          style={{ width: `${(dest.students / Math.max(...destinations.map(d => d.students))) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Quick Actions Bar */}
      <div className="fixed bottom-6 right-6 flex space-x-3">
        <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition duration-200">
          <MessageSquare className="w-6 h-6" />
        </button>
        <button className="bg-gradient-to-r from-emerald-600 to-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition duration-200">
          <Phone className="w-6 h-6" />
        </button>
        <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition duration-200">
          <Plus className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default App;