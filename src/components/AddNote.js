import React, { useState } from "react";
import "./style/AddNote.css";

export const AddNote = (props) => {
  const [state, setState] = useState({
    text: "",
    date: null,
  });

  const handleText = (e) => {
    setState({
      text: e.target.value,
      date: new Date().getTime(),
    });
  };

  const cleanForm = () => {
    const { text, date } = state;
    const add = props.add(text, date);
    if (add) {
      setState({
        text: "",
      });
    }
  };

  return (
    <div className="addNote">
      <h2>Note</h2>
      <textarea
        type="text"
        placeholder="Note text"
        value={state.text}
        onChange={handleText}
      />
      <button onClick={cleanForm}>Add note</button>
    </div>
  );
};
