import React, { useContext } from "react";
import AddNote from "./AddNote";
import NoteList from "./NoteList";
import { AppContext } from "./context/Context";

const App = () => {
  const context = useContext(AppContext);
  // let counterId = 5;

  // const deleteNote = (id) => {
  //   let notes = [...this.state.notes];
  //   notes = notes.filter((note) => note.id !== id);
  //   this.setState({
  //     notes,
  //   });
  // };

  // const findId = () => {
  //   console.log("id");
  // };

  // const addNote = (text, date) => {
  //   console.log(counterId);
  //   if (text === "") return alert("Enter the content.");
  //   const notes = [...context];
  //   const note = {
  //     id: counterId,
  //     text,
  //     date,
  //   };
  //   notes.push(note);
  //   counterId = counterId++;
  //   console.log(note);
  //   console.log(notes);
  //   return true;
  // };

  return (
    <div>
      <AddNote add={context.actions.addNote} />
      <NoteList
        notes={context}
        delete={context.actions.deleteNote}
        handle={context.actions.handleClick}
      />
    </div>
  );
};

export default App;
