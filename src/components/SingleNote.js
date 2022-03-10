import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "./context/Context";
import "./SingleNote.css";

const SingleNote = () => {
  const context = useContext(AppContext);
  console.log();
  console.log(context);
  // console.log(context.store.singleNoteId);
  // console.log(this.state.notes);
  return (
    <div className="singleNote">
      <header>
        <h1>Notes App</h1>
      </header>
      {/* <p>{context.state.singleNoteText}</p>
      <p>{context.state.singleNoteDate}</p> */}

      <NavLink to="/">
        <button className="back">Go back</button>
      </NavLink>
      <NavLink to="/">
        <button className="delete">Delete note</button>
      </NavLink>
      <div className="contentSingleNote">
        {" "}
        <p className="text">
          texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
        </p>
        <p className="date">10/03/2022</p>
      </div>
    </div>
  );
};

export default SingleNote;
