import React from "react";
import { NavLink } from "react-router-dom";

const SingleNote = (props) => {
  //   const notesss = props.notes.filter((note) => (
  //     <App key={note.id} note={note} />
  //   ));

  // deleteNote = (id) => {
  //     let notes = [...this.props.notes];
  //     notes = notes.filter((note) => note.id !== id);
  //     this.setState({
  //       notes,
  //     });
  //   };

  return (
    <div className="singleNote">
      <p>text</p>
      <p>data</p>
      <NavLink to="/">
        <button>Go back</button>
      </NavLink>
      <NavLink to="/">
        <button>Delete note</button>
      </NavLink>
    </div>
  );
};

export default SingleNote;
