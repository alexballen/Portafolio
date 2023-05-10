import Nav from "./component/Nav";
import { Routes, Route } from "react-router-dom";
import Tecnologias from "./component/Tecnologias";
import AcercaDeMi from "./component/AcercaDeMi";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<AcercaDeMi />} />
        <Route exact path="/tecnologias" element={<Tecnologias />} />
      </Routes>
    </>
  );
}

export default App;
