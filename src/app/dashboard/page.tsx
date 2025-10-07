"use client";

import React from "react";
import Banner from "./components/banner";
import HeaderNav from "@/components/HeaderNav";
import Chip from "@/components/Chip";
import CustomCard from "@/components/Card";
import ListItem from "@/components/ListItem";
import CalendarCard from "./components/calendar";
import SearchBar from "@/components/SearchBar";
import {
  task,
  events,
  chipsData,
} from "@/hooks/dashboard-hook";
import {
  Laptop,
  CheckCircle,
  Armchair,
} from "lucide-react";
import "./styles/dashboard.css";


const DashboardPage = () => {

  return (
    <div className="dashboard-container">
      <div className="header-spacer">
        <HeaderNav />
        <SearchBar width="91%" placeholder="Buscar" />
      </div>

      <Banner />

      <div className="chips-container">
        {chipsData.map((chip) => (
          <div key={chip.id} className="chip-item">
            <Chip icon={chip.icon} title={chip.title} selected={chip.selected} />
          </div>
        ))}
      </div>

      <div className="dashboard-content">

        <div className="cards-row">
          <div className="card-item small">
            <CustomCard
              icon={<CheckCircle size={45} />}
              title="30 Casos"
              subtitle="Activos en Marzo"
            />
          </div>

          <div className="card-item small">
            <CustomCard
              icon={<Laptop size={45} />}
              title="3 reuniones"
              subtitle="Hoy"
            />
          </div>

          <div className="card-item large">
            <CustomCard
              icon={<Armchair size={45} />}
              title="Nombre de la reunión"
              subtitle='ABCDE, "Caso Y"'
              timer="00:35"
              buttonText="Unirme"
              onButtonClick={() => alert("Entrando a la reunión...")}
            />
          </div>
        </div>

        <div className="calendar-wrapper">
          <CalendarCard
            showSelect={false}
            selectOptions={[]}
            events={events}
            currentTime="09:00"
          />
        </div>

        <div className="tasks-section">
          <ListItem
            tasks={task}
          />
        </div>

        <div className="files-section">
          <ListItem
            variant="files"
            title="Archivos recientes"
            buttonText="Ver todos"
            tasks={[
              { title: "Nombre de Archivo ABCDEF", fileType: "word", size: "2.7 MG", lastEdit: "25/03" },
              { title: "Nombre de Archivo ABCDEF", fileType: "pdf", size: "2.7 MG" },
              { title: "Nombre de Archivo ABCDEF", fileType: "pdf", size: "2.7 MG" },
              { title: "Nombre de Archivo ABCDEF", fileType: "pdf", size: "2.7 MG" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
