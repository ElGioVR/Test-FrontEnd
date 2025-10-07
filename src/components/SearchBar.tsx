"use client";

import React from "react";
import { Search } from "lucide-react";
import "@/styles/searchBar.css";

interface SearchBarProps {
  placeholder?: string;
  onChange?: (value: string) => void;
  width?: string;
}

const SearchBar = ({
  placeholder = "Buscar",
  onChange,
  width,
}: SearchBarProps) => {
  return (
    <div
      className="search-container"
      style={
        width
          ? { width, margin: "20px" }
          : undefined
      }
    >
      <Search className="search-icon" />
      <input
        type="search"
        placeholder={placeholder}
        className="search-input"
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
