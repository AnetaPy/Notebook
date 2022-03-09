import React from "react";
import Note from "./Note";

const NoteList = (props) => {
  const notes = props.notes.map((note) => (
    <Note key={note.id} note={note} delete={props.delete} />
  ));
  // Sort
  // notes.sort((a, b) => b.date - a.date);
  // console.log(props.date);
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
