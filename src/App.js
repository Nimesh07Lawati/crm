import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar.jsx';
import TopNav from './components/TopNav';
import Dashboard from "./pages/dashboard";
import Students from './pages/students.jsx';
import Appointments from './pages/Appointments';
import Applications from './pages/Applications';
import Communications from './pages/Communications';
import Payments from './pages/Payments';
import Universities from './pages/Universities';
import Reports from './pages/Reports';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
          <TopNav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/students" element={<Students />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/applications" element={<Applications />} />
              <Route path="/communications" element={<Communications />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/universities" element={<Universities />} />
              <Route path="/reports" element={<Reports />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;