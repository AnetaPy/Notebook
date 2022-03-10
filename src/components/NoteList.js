import React from "react";
import Note from "./Note";
import "./NoteList.css";

const NoteList = (props) => {
  console.log(props.notes);
  const sortedNotes = props.notes.state.notes.sort((a, b) => b.date - a.date);
  const notes = sortedNotes.map((note) => (
    <Note key={note.id} note={note} delete={props.delete} find={props.find} />
  ));
  // console.log(sortedNotes);
  // console.log(notes);
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
