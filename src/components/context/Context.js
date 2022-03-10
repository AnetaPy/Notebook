import React, { useState } from "react";

export const AppContext = React.createContext(null);

const ContextWrapper = (props) => {
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
      setState({
        notes,
      });
    },
    findId: (id) => {
      console.log(id);
      // let notes = [...state.notes];
      const note = state.notes.filter((note) => note.id === id);
      console.log(note);

      // setState({
      //   singleNoteID: note[0].id,
      //   singleNoteText: note[0].text,
      //   singleNoteDate: note[0].date,
      //   // });
      // console.log(store);
      // console.log(note[0].id);
      // console.log(note[0].text);
      // console.log(note[0].date);
      //   });
    },
  });

  return (
    <AppContext.Provider value={{ state, actions }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextWrapper;
