
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; 
import "tailwindcss/tailwind.css"; 
import "./styles/Global.css"
import "./styles/Tailwind.css"
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);