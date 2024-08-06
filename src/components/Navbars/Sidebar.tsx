import { cn } from '@/lib/utils';
import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import {
  BarChart3,
  Megaphone,
  CalendarDays,
  Warehouse,
  Users,
  Box,
  User,
  Settings,
  X,
} from 'lucide-react';

interface MenuItem {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  path: string;
}

interface SidebarProps {
  className?: string;
  activePath: string;
  onClose: () => void; // Callback to handle close action
}

const Sidebar: React.FC<SidebarProps> = ({ className, activePath, onClose }) => {
  const menuItems: MenuItem[] = [
    { icon: BarChart3, label: 'Sales', path: '/sales' },
    { icon: Megaphone, label: 'Marketing', path: '/marketing' },
    { icon: CalendarDays, label: 'Events', path: '/events' },
    { icon: Warehouse, label: 'Warehouse', path: '/warehouse' },
    { icon: User, label: 'Customer', path: '/customer' },
    { icon: Box, label: 'Products', path: '/products' },
    { icon: Users, label: 'Users', path: '/users' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className={cn("w-64 bg-slate-800 h-screen flex flex-col", className)}>
      <header className="flex items-center justify-between p-4">
        <h2 className="text-white font-semibold text-lg">Menu</h2>
        <Button
          variant="ghost"
          onClick={onClose}
          className="text-slate-300 block md:hidden hover:text-slate-100"
        >
          <X className="h-6 w-6 block" />
        </Button>
      </header>
      <nav className='flex-1 p-4 space-y-2'>
        {menuItems.map((item) => (
          <Button
            key={item.path}
            variant="ghost"
            className={cn(
              "w-full justify-start text-slate-300 hover:text-slate-100 hover:bg-slate-700",
              activePath === item.path && "bg-slate-700 text-slate-100"
            )}
            asChild
          >
            <Link to={item.path}>
              <item.icon className="mr-2 h-5 w-5" />
              {item.label}
            </Link>
          </Button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
