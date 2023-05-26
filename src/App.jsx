import { useContext, useEffect } from "react";
import DarkModeContext from "./component/DarkModeContext";
import Nav from "./component/Nav";
import { Routes, Route } from "react-router-dom";
import Tecnologias from "./component/Tecnologias";
import AcercaDeMi from "./component/AcercaDeMi";
import Proyectos from "./component/Proyectos";
import Contacto from "./component/Contacto";
import s from "./App.module.css";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    if (darkMode) {
      document.body.style.setProperty(
        "--background-color-body",
        "rgb(38, 38, 38)"
      );
      document.documentElement.style.setProperty(
        "--scrollbar-background-color",
        "#262525"
      );
      document.documentElement.style.setProperty(
        "--scrollbar-thumb-color",
        "#b94700bf"
      );
    } else {
      document.body.style.setProperty("--background-color-body", "#fff");
      document.documentElement.style.setProperty(
        "--scrollbar-background-color",
        "#fff"
      );
      document.documentElement.style.setProperty(
        "--scrollbar-thumb-color",
        "#ff731d"
      );
    }

    return () => {
      document.body.style.removeProperty("--background-color-body");
      document.documentElement.style.removeProperty(
        "--scrollbar-background-color"
      );
      document.documentElement.style.removeProperty("--scrollbar-thumb-color");
    };
  }, [darkMode]);

  return (
    <>
      <div className={`${darkMode ? s.dark_mode : ""}`}>
        <Nav />
        <Routes>
          <Route exact path="/" element={<AcercaDeMi />} />
          <Route path="/tecnologias" element={<Tecnologias />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
