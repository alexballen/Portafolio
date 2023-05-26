import { useContext } from "react";
import DarkModeContext from "./DarkModeContext";
import { IconContext } from "react-icons";
import { MdOutlineLightMode, MdModeNight } from "react-icons/md";
import s from "./DarkMode.module.css";

const DarkMode = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <main>
      <section>
        <div onClick={handleDarkMode} className={s.container}>
          {!darkMode ? (
            <IconContext.Provider
              value={{ className: "shared", size: 25, color: "#372a2af6" }}
            >
              <MdModeNight />
            </IconContext.Provider>
          ) : (
            <IconContext.Provider
              value={{ className: "shared", size: 25, color: "#f1da0d" }}
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
