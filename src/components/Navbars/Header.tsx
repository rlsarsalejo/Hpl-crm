import React from 'react';
import { Button } from '../ui/button'; // Adjust the import based on your project structure
import { Menu } from 'lucide-react'; // Icon for the sidebar toggle
import { cn } from '@/lib/utils'; // Utility for conditional class names


export default function Header() {
  return (
    <div>
        <header className="bg-[#fff] p-4 flex items-center justify-between">
      <Button
        variant="ghost"
        className="text-slate-200 md:hidden"
      >
        <Menu className="h-6 w-6" />
      </Button>
      <h1 className="text-black text-lg font-semibold">Your App Title</h1>
      {/* You can add additional header content here */}
    </header>
    </div>
  )
}
