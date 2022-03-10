import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = React.createContext(null);

const ContextWrapper = (props) => {
  // const navigate = useNavigate();
  let counterId = 5;
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
    sNID: "",
    sNText: "",
    sNDate: "",
  });
  const [actions, setActions] = useState({
    addNote: (text, date) => {
      if (text === "") return alert("Enter the content.");
      const note = {
        id: counterId,
        text,
        date,
      };
      counterId++;
      setState((prevState) => ({
        notes: [...prevState.notes, note],
      }));
      return true;
    },
    deleteNote: (id) => {
      let notes = [...state.notes];
      notes = notes.filter((note) => note.id !== id);
      // console.log("ggdbghbcsdhcb");
      setState({
        notes,
      });
    },

    handleClick: (id) => {
      // console.log(id);
      const note = state.notes.filter((note) => note.id === id);
      // console.log(note);
      setStore({
        sNId: note[0].id,
        sNText: note[0].text,
        sNDate: note[0].date,
      });
      // const location = {
      //   pathname: `note/${id}`,
      // };
      // navigate.push(location);
    },
  });

  return (
    <AppContext.Provider value={{ state, store, actions }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextWrapper;
