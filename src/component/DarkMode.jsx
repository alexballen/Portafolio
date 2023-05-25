import { useContext } from "react";
import DarkModeContext from "./DarkModeContext";
import { IconContext } from "react-icons";
import { MdOutlineLightMode, MdModeNight } from "react-icons/md";

const DarkMode = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <main>
      <section>
        <div onClick={handleDarkMode}>
          {!darkMode ? (
            <IconContext.Provider
              value={{ className: "shared-class", size: 40, color: "black" }}
            >
              <MdModeNight />
            </IconContext.Provider>
          ) : (
            <IconContext.Provider
              value={{ className: "shared", size: 40, color: "white" }}
            >
              <MdOutlineLightMode />
            </IconContext.Provider>
          )}
        </div>
      </section>
    </main>
  );
};

export default DarkMode;
