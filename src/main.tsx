import React from "react";
import ReactDOM from "react-dom/client";
import { mirageInit } from "@/server";
import App from "@/App.tsx";
import "@/index.css";

mirageInit();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
