import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import "./index.css";
import WebRoutes from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WebRoutes />
  </React.StrictMode>
);
