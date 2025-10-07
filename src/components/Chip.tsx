import React from "react";
import "@/styles/chip.css";

interface ChipProps {
  icon: React.ReactNode;
  title: string;
  selected?: boolean;
}

const Chip = ({ icon, title, selected = false }: ChipProps) => {
  return (
    <div className={`chip-container ${selected ? "selected" : "unselected"}`}>
      <div className={`chip-icon ${selected ? "selected" : "unselected"}`}>
        {icon}
      </div>
      <span className={`chip-title ${selected ? "selected" : "unselected"}`}>
        {title}
      </span>
    </div>
  );
};

export default Chip;
