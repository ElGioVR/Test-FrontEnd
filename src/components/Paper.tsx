import React from "react";
import { ChevronRight } from "lucide-react";
import "@/styles/paper.css";

interface PaperProps {
  title?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  showSelect?: boolean;
  selectOptions?: string[];
  onSelectChange?: (value: string) => void;
  children?: React.ReactNode;
}

const Paper = ({
  title = "",
  buttonText,
  onButtonClick,
  showSelect = false,
  selectOptions = [],
  onSelectChange,
  children,
}: PaperProps) => {
  return (
    <div className="paper">
      <div className="paper-header">
        {title && <h2 className="paper-title">{title}</h2>}

        <div className="paper-actions">
          {showSelect && (
            <select
              className="paper-select"
              onChange={(e) => onSelectChange?.(e.target.value)}
            >
              {selectOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          )}

          {buttonText && (
            <button onClick={onButtonClick} className="paper-button">
              {buttonText}
              <ChevronRight size={14} />
            </button>
          )}
        </div>
      </div>

      <div className="paper-content">{children}</div>
    </div>
  );
};

export default Paper;
