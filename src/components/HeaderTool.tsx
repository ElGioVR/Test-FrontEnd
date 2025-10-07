import React from "react";
import { Calendar, BellDot, Mail } from "lucide-react";
import Image from "next/image";
import "@/styles/headerTool.css";
import SearchBar from "@/components/SearchBar";

const userImg = "https://randomuser.me/api/portraits/men/32.jpg";

const HeaderTool = () => {
  return (
    <header className="header-tool">

      <div className="header-left flex items-center gap-4">
        <div className="date-display flex items-center gap-2">
          <Calendar className="date-icon" />
          <span className="date-text">Marzo 2022</span>
        </div>

        <SearchBar placeholder="Buscar" />
      </div>

      <div className="header-right">
        <button className="icon-btn" title="Notificaciones">
          <BellDot className="task-icons" />
        </button>
        <button className="icon-btn" title="Mensajes">
          <Mail className="task-icons" />
        </button>
        <select className="lang-select" defaultValue="esp">
          <option value="esp">ESP</option>
          <option value="eng">ENG</option>
        </select>
        <div className="user-chip">
          <span className="user-name">Miguel Serrano</span>
          <Image
            src={userImg}
            alt="User"
            width={35}
            height={35}
            priority={false}
            className="user-img"
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderTool;
