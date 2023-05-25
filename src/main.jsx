import React from "react";
import { DarkModeProvier } from "./component/DarkModeContext.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeProvier>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DarkModeProvier>
  </React.StrictMode>
);
