import React from "react";
import ReactDOM from "react-dom/client"; // Note the change in the import
import "./App.css";
import App from "./App";

// Use createRoot instead of render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
