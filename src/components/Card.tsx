"use client";

import React from "react";
import Paper from "@/components/Paper";
import "@/styles/card.css";

interface CustomCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  buttonText?: string;
  timer?: string;
  onButtonClick?: () => void;
}

const CustomCard = ({
  icon,
  title,
  subtitle,
  buttonText,
  timer,
  onButtonClick,
}: CustomCardProps) => {
  return (
    <Paper>
      <div className="custom-card">
        <div className="custom-card-left">
          <div className="custom-card-icon">{icon}</div>
          <div className="custom-card-info">
            <h3 className="custom-card-title">{title}</h3>
            {subtitle && <p className="custom-card-subtitle">{subtitle}</p>}
          </div>
        </div>

        {(buttonText || timer) && (
          <div className="custom-card-actions">
            {timer && (
              <div className="custom-card-timer">
                <span className="custom-card-timer-label">Faltan</span>
                <span className="custom-card-timer-value">{timer}</span>
                <span className="custom-card-timer-unit">minutos</span>
              </div>
            )}
            {buttonText && (
              <button
                onClick={onButtonClick}
                className="custom-card-button"
              >
                {buttonText} →
              </button>
            )}
          </div>
        )}
      </div>
    </Paper>
  );
};

export default CustomCard;
