"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Bell, Menu, X } from "lucide-react";
import "@/styles/headerNav.css";

const HeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "Dashboard",
    "Gestión de Casos",
    "Sala de Audiencias",
    "Calendario",
    "Mensajes",
    "Recursos Legales",
  ];

  return (
    <header className="header-nav">
      {/* Logo */}
      <div className="header-logo">
        <Image
          src="/logo.svg"
          alt="Logo"
          priority={false}
          width={150}
          height={40}
        />
      </div>
      <div className="header-icons">
        <button className="icon-button" aria-label="Notificaciones">
          <Bell size={20} />
        </button>

        <button
          className="icon-button-menu"
          aria-label="Menú"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <nav className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} onClick={() => setIsOpen(false)}>
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNav;
