import React from "react";
import Note from "./Note";
import "./style/NoteList.css";

const NoteList = (props) => {
  const sortedNotes = props.notes.state.notes.sort((a, b) => b.date - a.date);
  const notes = sortedNotes.map((note) => (
    <Note
      key={note.id}
      note={note}
      delete={props.delete}
      handle={props.handle}
    />
  ));
  return (
    <>
      <div className="noteList">
        <h2>Lates notes</h2>
        {notes}
      </div>
    </>
  );
};

export default NoteList;
