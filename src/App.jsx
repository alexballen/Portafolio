import Nav from "./component/Nav";
import { Routes, Route } from "react-router-dom";
import Tecnologias from "./component/Tecnologias";
import AcercaDeMi from "./component/AcercaDeMi";
import Proyectos from "./component/Proyectos";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<AcercaDeMi />} />
        <Route path="/tecnologias" element={<Tecnologias />} />
        <Route path="/proyectos" element={<Proyectos />} />
      </Routes>
    </>
  );
}

export default App;
