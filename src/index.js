import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import SingleNote from "./components/SingleNote";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ContextWrapper from "./components/context/Context.js";
import "./index.css";

function Router() {
  return (
    <div>
      <header>
        <h1>Note App</h1>
      </header>

      <App />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextWrapper>
        <Routes>
          <Route path="/note" element={<SingleNote />} />
          <Route path="/" element={<Router />} />
        </Routes>
      </ContextWrapper>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
