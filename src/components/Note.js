import React from "react";
import { NavLink } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const Note = (props) => {
  const { id, text, date } = props.note;
  const leadingZero = (value) => (value < 10 && value > -1 ? "0" : "") + value;
  const actualDate = `${leadingZero(
    new Date(date).getMonth() + 1
  )}/${leadingZero(new Date(date).getDate())}/${new Date(date).getFullYear()}`;
  const markdownText = <ReactMarkdown>{text}</ReactMarkdown>;

  return (
    <div className="note">
      <div className="content">
        <div className="text">{markdownText}</div>
        <NavLink to="/note" className="date" onClick={() => props.handle(id)}>
          {actualDate}{" "}
        </NavLink>
      </div>
      <button onClick={() => props.delete(id)}>Delete note</button>
    </div>
  );
};

export default Note;
