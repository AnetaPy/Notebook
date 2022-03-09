import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import SingleNote from "./components/SingleNote";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NotesContextProvider from "./components/context/Context.js";

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
      <NotesContextProvider>
        <Routes>
          <Route path="/" element={<Router />} />
          <Route path="/note" element={<SingleNote />} />
        </Routes>
      </NotesContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
