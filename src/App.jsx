import Nav from "./component/Nav";
import { Routes, Route } from "react-router-dom";
import Tecnologias from "./component/Tecnologias";
import AcercaDeMi from "./component/AcercaDeMi";
import Proyectos from "./component/Proyectos";
import Contacto from "./component/Contacto";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<AcercaDeMi />} />
        <Route path="/tecnologias" element={<Tecnologias />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
}

export default App;
