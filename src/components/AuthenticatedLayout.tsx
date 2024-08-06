import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '@/components/Navbars/Sidebar';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const AuthenticatedLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar 
        className={`fixed inset-y-0 left-0 z-50 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0`} 
        activePath={location.pathname}
        onClose={() => setSidebarOpen(false)} // Pass the close handler
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-slate-800 p-4 md:hidden">
          <Button variant="ghost" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu className="h-6 w-6 text-slate-200" />
          </Button>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-800">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AuthenticatedLayout;
