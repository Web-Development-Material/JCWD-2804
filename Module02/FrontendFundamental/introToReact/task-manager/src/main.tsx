import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx'
import PageRouter from "./router/PageRouter";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PageRouter />
  </React.StrictMode>
);
