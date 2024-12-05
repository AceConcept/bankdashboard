import React from 'react';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';

export default function Home() {
  return (
    <>
      <Sidebar />
      <div className="flex-1 overflow-auto bg-[#FFFFFF]">
        <Dashboard />
      </div>
    </>
  );
}
