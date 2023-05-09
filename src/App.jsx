import Nav from "./component/Nav";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" />
      </Routes>
    </>
  );
}

export default App;
