import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const DarkModeContext = createContext();

export const DarkModeProvier = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("dark") === "true"
  );

  useEffect(() => {
    localStorage.setItem("dark", darkMode.toString());
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

DarkModeProvier.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DarkModeContext;
