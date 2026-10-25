import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// ✅ base url for GitHub Pages + local
const base = import.meta.env.BASE_URL;

// this will become: url(/PolyAgent/polyagent-watermark.png) on Pages
document.documentElement.style.setProperty(
  "--watermark-url",
  `url(${base}polyagent-watermark.png)`
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
