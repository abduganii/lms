import { useEffect, useState } from "react";
import { EyeIcons } from "../icon";

const useDarkMode = () => {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' && localStorage.theme === 'dark' ? 'dark' : 'light'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);

    // Save preference to local storage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return [theme, toggleDarkMode];
};

const Theme = () => {
  const [theme, toggleDarkMode] = useDarkMode();
  return (
    
      <span className="cursor-pointer" onClick={toggleDarkMode}><EyeIcons color={theme=="dark"? "white": "black"} /></span>
  );
};

export default Theme;
