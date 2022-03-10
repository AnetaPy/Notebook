import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

export const AppContext = React.createContext(null);

const ContextWrapper = (props) => {
  // const navigate = useNavigate();
  // let counterId = 5;
  const [state, setState] = useState({
    notes: [
      {
        id: 0,
        text: "blle blee bleeeeeeeee",
        date: 1622081410222,
      },
      {
        id: 1,
        text: "aaaaaaaaaa",
        date: 1640081621111,
      },
      {
        id: 2,
        text: "bbbbbbbbbb",
        date: 1606681628356,
      },
      {
        id: 3,
        text: "ccccccccccccc",
        date: 1646681628250,
      },
      {
        id: 4,
        text: "dddddddddddd",
        date: 1646680628256,
      },
    ],
  });
  const [store, setStore] = useState({
    noteId: "",
    noteText: "",
    noteDate: "",
  });
  return (
    <AppContext.Provider value={{ state, store, setState, setStore }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextWrapper;
