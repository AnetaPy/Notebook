import React from "react";
import { NavLink } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const Note = (props) => {
  const { id, text, date } = props.note;
  const actualDate = new Date(date).toLocaleDateString();
  const markdownText = <ReactMarkdown>{text}</ReactMarkdown>;

  return (
    <div className="note">
      <div className="content">
        <NavLink
          to="/note"
          className="contentNote"
          onClick={() => props.handle(id)}
        >
          <div className="text">{markdownText}</div>
          <p>{actualDate}</p>
        </NavLink>
      </div>
      <button onClick={() => props.delete(id)}>Delete note</button>
    </div>
  );
};

export default Note;
