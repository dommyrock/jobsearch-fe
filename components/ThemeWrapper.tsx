import React from "react";
import { ThemeContextType, Theme } from "../@types/theme";
import { ThemeContext } from "../context/ThemeContext";
import { Props } from "../Interfaces";

const ThemeWrapper: React.FC<Props> = ({ children }) => {
  const { theme, changeTheme } = React.useContext(ThemeContext) as ThemeContextType;

  const handleThemeChange = () => {
    if (theme === "light") {
      return changeTheme("dark");
    }
    changeTheme("light");
  };
  return (
    <div className="theme-wrapper" data-theme={theme}>
      <button onClick={handleThemeChange}>
        {theme === "light" ? <Mode stroke="#000" fill="#000" /> : <Mode stroke="#fff" />}
      </button>
      {children}
    </div>
  );
};

export default ThemeWrapper;

interface ModeProps {
  stroke: string;
  fill?: string;
}
const Mode: React.FC<ModeProps> = ({ stroke, fill = "none" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill={fill}
      viewBox="0 0 24 24"
      stroke={stroke}
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
};
