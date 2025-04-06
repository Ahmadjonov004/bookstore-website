import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; 
import "tailwindcss/tailwind.css"; 
import "./styles/Global.css"
import "./styles/Tailwind.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);