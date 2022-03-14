import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./components/App";
import SingleNote from "./components/SingleNote";
import ContextWrapper from "./components/Context.js";

function Router() {
  return (
    <div>
      <App />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
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
