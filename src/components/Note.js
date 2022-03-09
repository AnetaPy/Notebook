import React from "react";
import { NavLink } from "react-router-dom";

const Note = (props) => {
  const { id, text, date } = props.note;
  const leadingZero = (value) => (value < 10 && value > -1 ? "0" : "") + value;
  const actualDate = `${leadingZero(
    new Date(date).getMonth() + 1
  )}/${leadingZero(new Date(date).getDate())}/${new Date(date).getFullYear()}`;
  return (
    <div>
      <p>{text}</p>
      <NavLink to="/note">{actualDate}</NavLink>
      <button onClick={() => props.delete(id)}>Delete note</button>
    </div>
  );
};

export default Note;
