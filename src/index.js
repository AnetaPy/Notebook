import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import SingleNote from "./components/SingleNote";
import { Routes, Route, BrowserRouter } from "react-router-dom";

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
      <Routes>
        <Route path="/" element={<Router />} />
        <Route path="/note" element={<SingleNote />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
