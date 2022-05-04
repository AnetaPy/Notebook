import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "./context/Context";
import ReactMarkdown from "react-markdown";
import "./style/SingleNote.css";

const SingleNote = (props) => {
  const context = useContext(AppContext);
  const markdownText = <ReactMarkdown>{context.store.noteText}</ReactMarkdown>;
  const actualDate = new Date(context.store.noteDate).toLocaleDateString();

  const deleteNote = (id) => {
    let notes = [...context.state.notes];
    notes = notes.filter((note) => note.id !== id);
    context.setState({
      notes,
    });
  };

  return (
    <div className="singleNote">
      <header>
        <h1>Notes App</h1>
      </header>
      <div className="buttons">
        <NavLink to="/">
          <button className="back">Go back</button>
        </NavLink>
        <NavLink to="/">
          <button
            className="delete"
            onClick={() => deleteNote(context.store.noteId)}
          >
            Delete note
          </button>
        </NavLink>
      </div>
      <div className="contentSingleNote">
        <div className="text">{markdownText}</div>
        <p className="date">{actualDate}</p>
      </div>
    </div>
  );
};

export default SingleNote;
