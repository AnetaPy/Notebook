import React, { useContext } from "react";
import { AppContext } from "./context/Context";
import { v4 as uuidv4 } from "uuid";
import AddNote from "./AddNote";
import NoteList from "./NoteList";
import "./style/App.css";

const App = () => {
  const context = useContext(AppContext);
  let noteId = uuidv4();

  const addNote = (text, date) => {
    if (text === "") return alert("Enter the content.");
    const notes = [...context.state.notes];
    const note = {
      id: noteId,
      text,
      date,
    };
    notes.push(note);
    context.setState({ notes });
    return true;
  };

  const deleteNote = (id) => {
    if (id) {
      const notes = [...context.state.notes].filter((note) => note.id !== id);
      context.setState({
        notes,
      });
    }
  };

  const handleSingleNote = (id) => {
    const note = context.state.notes.filter((note) => note.id === id);
    context.setStore({
      noteId: note[0].id,
      noteText: note[0].text,
      noteDate: note[0].date,
    });
  };

  return (
    <div className="containerApp">
      <header>
        <h1>Note App</h1>
      </header>
      <AddNote add={addNote} />
      <NoteList notes={context} delete={deleteNote} handle={handleSingleNote} />
    </div>
  );
};

export default App;
