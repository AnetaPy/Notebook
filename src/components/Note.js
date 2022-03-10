import React from "react";
import { NavLink } from "react-router-dom";

const Note = (props) => {
  const { id, text, date } = props.note;
  // console.log(props.note);
  const leadingZero = (value) => (value < 10 && value > -1 ? "0" : "") + value;
  const actualDate = `${leadingZero(
    new Date(date).getMonth() + 1
  )}/${leadingZero(new Date(date).getDate())}/${new Date(date).getFullYear()}`;

  return (
    <div className="containerNote">
      <div className="content">
        <p className="text">{text}</p>
        <NavLink to="/note" className="date" onClick={() => props.handle(id)}>
          {actualDate}{" "}
        </NavLink>
      </div>
      <button onClick={() => props.delete(id)}>Delete note</button>
    </div>
  );
};

export default Note;
