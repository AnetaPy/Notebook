import React, { useState, useEffect } from "react";

export const AppContext = React.createContext(null);

export const ContextWrapper = (props) => {
  const [state, setState] = useState(() => {
    const saved = localStorage.getItem("state");
    const InitialValue = JSON.parse(saved);
    return (
      InitialValue || {
        notes: [],
      }
    );
  });
  const [store, setStore] = useState({
    noteId: "",
    noteText: "",
    noteDate: "",
  });

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, store, setState, setStore }}>
      {props.children}
    </AppContext.Provider>
  );
};
