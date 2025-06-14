"use client";

import React, { useContext } from "react";
import { ThemeContext, useTheme } from "../../store/ThemeContext";
import DirectionToggle from "./DirectionToggle";

export const Header = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("Header must be used within a ThemeProvider");
  }

  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className={`flex justify-between items-center p-4 ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-100 text-gray-900"
      }`}
    >
      <h1 className="text-xl font-bold">My App</h1>
      <button
        onClick={toggleTheme}
        className={`px-4 cursor-pointer py-2 rounded ${
          theme === "dark" ? "border border-white" : "border border-gray-900"
        }`}
      >
        {theme === "dark" ? "Switch to Light" : "Switch to Dark"}
      </button>
      <DirectionToggle />
    </header>
  );
};

export default Header;
