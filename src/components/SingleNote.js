import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "./context/Context";
import "./style/SingleNote.css";

const SingleNote = () => {
  const context = useContext(AppContext);
  const id = context.store.noteId;
  console.log(context.store.noteId);

  const leadingZero = (value) => (value < 10 && value > -1 ? "0" : "") + value;
  const actualDate = `${leadingZero(
    new Date(context.store.noteDate).getMonth() + 1
  )}/${leadingZero(new Date(context.store.noteDate).getDate())}/${new Date(
    context.store.noteDate
  ).getFullYear()}`;

  const deleteNote = (id) => {
    console.log(context.store.noteId);

    let notes = [...context.state.notes];
    console.log(notes);
    notes = notes.filter((note) => note.id !== id);
    console.log(id);
    console.log("ddddd");
    console.log(notes);
    context.setState({
      notes,
    });
  };

  return (
    <div className="singleNote">
      <header>
        <h1>Notes App</h1>
      </header>
      <NavLink to="/">
        <button className="back">Go back</button>
      </NavLink>
      <NavLink to="/">
        <button className="delete" onClick={() => deleteNote(id)}>
          Delete note
        </button>
      </NavLink>
      <div className="contentSingleNote">
        <p className="text">{context.store.noteText}</p>
        <p className="date">{actualDate}</p>
      </div>
    </div>
  );
};

export default SingleNote;
