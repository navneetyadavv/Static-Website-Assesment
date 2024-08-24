import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex relative flex-col lg:ml-64 min-h-screen">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="flex-1">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default App;
