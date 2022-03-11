import React, { useContext } from "react";
import AddNote from "./AddNote";
import NoteList from "./NoteList";
import { AppContext } from "./context/Context";
import { v4 as uuidv4 } from "uuid";
import "./style/App.css";

const App = () => {
  const context = useContext(AppContext);
  let counter = uuidv4();

  const addNote = (text, date) => {
    if (text === "") return alert("Enter the content.");
    console.log(counter);
    const notes = [...context.state.notes];
    const note = {
      id: counter,
      text,
      date,
    };
    console.log(note);
    notes.push(note);
    context.setState({ notes });
    console.log(counter);
    return true;
  };

  const deleteNote = (id) => {
    let notes = [...context.state.notes];
    notes = notes.filter((note) => note.id !== id);
    context.setState({
      notes,
    });
  };

  const handleClick = (id) => {
    const note = context.state.notes.filter((note) => note.id === id);
    context.setStore({
      noteId: note[0].id,
      noteText: note[0].text,
      noteDate: note[0].date,
    });
  };

  return (
    <div>
      <header>
        <h1>Note App</h1>
      </header>

      <AddNote add={addNote} />
      <NoteList notes={context} delete={deleteNote} handle={handleClick} />
    </div>
  );
};

export default App;
