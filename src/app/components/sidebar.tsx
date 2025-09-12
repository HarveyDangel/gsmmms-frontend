"use client";
import { useState } from "react";
import { Menu, X, Home, Map, FileText, Settings } from "lucide-react";

export default function Sidebar({ active, setActive }: { active: string; setActive: (val: string) => void }) {
  const [open, setOpen] = useState(true);

  const menuItems = [
    { name: "Dashboard", icon: <Home size={20} /> },
    { name: "Map", icon: <Map size={20} /> },
    { name: "Reports", icon: <FileText size={20} /> },
    { name: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <div
      className={`bg-gray-100 border-r h-screen p-4 transition-all duration-300
      ${open ? "w-64" : "w-16"} flex flex-col`}
    >
      {/* Toggle Button */}
      <button
        className="mb-6 p-2 rounded-lg hover:bg-gray-200"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Menu Items */}
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActive(item.name)}
            className={`flex items-center gap-3 p-2 rounded-lg transition-colors
              ${active === item.name
                ? "bg-green-600 text-white"
                : "hover:bg-gray-200 text-gray-800"
              }`}
          >
            {item.icon}
            {open && <span>{item.name}</span>}
          </button>
        ))}
      </nav>
    </div>
  );
}
