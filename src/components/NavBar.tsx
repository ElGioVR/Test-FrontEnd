import React from "react";
import Image from "next/image";
import {
  LayoutDashboard,
  Scale,
  Video,
  CalendarDays,
  SendHorizontal,
  BookOpen,
  Settings,
  LogOut,
} from "lucide-react";
import "@/styles/navBar.css";

type NavItem = {
  label: string;
  icon: React.ReactNode;
  href?: string;
};

const navItems: NavItem[] = [
  { label: "Dashboard", icon: <LayoutDashboard className="w-6 h-6" /> },
  { label: "Gestión de Casos", icon: <Scale className="w-6 h-6" /> },
  { label: "Sala de Audiencias", icon: <Video className="w-6 h-6" /> },
  { label: "Calendario", icon: <CalendarDays className="w-6 h-6" /> },
  { label: "Mensajes", icon: <SendHorizontal className="w-6 h-6" /> },
  { label: "Recursos Legales", icon: <BookOpen className="w-6 h-6" /> },
];

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">

      <div className="logo">
        <Image
          src="/logo.svg"
          alt="Logo"
          priority={false}
          width={150}
          height={40}
        />
      </div>

      <nav className="navigation">
        <ul>
          {navItems.map((item) => (
            <li key={item.label} className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded">
              {item.icon}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>

      <footer className="footer mt-auto space-y-5">
        <div className="settings flex items-center gap-2 cursor-pointer hover:text-blue-600">
          <Settings className="w-6 h-6" />
          <span>Configuración</span>
        </div>
        <div className="logout flex items-center gap-2 cursor-pointer hover:text-red-600">
          <LogOut className="w-6 h-6" />
          <span>Salir</span>
        </div>
      </footer>
    </div>
  );
};

export default LeftSidebar;
