import Nav from "./component/Nav";
import AcercaDeMi from "./component/AcercaDeMi";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<AcercaDeMi />} />
      </Routes>
    </>
  );
}

export default App;
