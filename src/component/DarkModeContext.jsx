import { createContext, useState } from "react";
import PropTypes from "prop-types";

const DarkModeContext = createContext();

export const DarkModeProvier = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
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
