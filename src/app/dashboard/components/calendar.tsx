"use client";

import React from "react";
import Paper from "@/components/Paper";
import "../styles/calendar.css";

interface CalendarEvent {
  time: string;
  title: string;
}

interface CalendarCardProps {
  showSelect?: boolean;
  selectOptions?: string[];
  events: CalendarEvent[];
  currentTime?: string;
}

const CalendarCard = ({
  showSelect = false,
  selectOptions = [],
  events,
  currentTime,
}: CalendarCardProps) => {
  return (
    <Paper showSelect={showSelect} selectOptions={selectOptions}>
      <div className="calendar-header">
        <h2 className="calendar-title">Calendario</h2>

        {showSelect ? (
          <select className="calendar-select">
            {selectOptions.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </select>
        ) : (
          <button className="calendar-button">Hoy ▾</button>
        )}
      </div>

      <p className="calendar-subheader">5 Reuniones</p>

      <div className="calendar-timeline">
        {events.map((event, index) => (
          <div key={index} className="calendar-event-group">
            <div className="calendar-time">
              {event.time}

              {currentTime && (
                <div className="calendar-current-time">
                  <div className="calendar-current-time-label">
                    {currentTime}
                  </div>
                  <div className="calendar-current-time-line">
                    <div />
                  </div>
                </div>
              )}
            </div>

            <div className="calendar-event-container">
              <div className="calendar-event-line" />
              <div className="calendar-event-card">
                <p className="calendar-event-title">{event.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Paper>
  );
};

export default CalendarCard;
