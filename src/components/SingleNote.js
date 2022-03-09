import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { NotesContext } from "./context/Context";

class SingleNote extends Component {
  static contextType = NotesContext;
  state = {
    notes: this.context,
  };

  render() {
    // console.log(this.context);
    // console.log(this.state.notes);
    return (
      <div className="singleNote">
        <p>{this.state.notes[2].text}</p>
        <p>data</p>
        <NavLink to="/">
          <button>Go back</button>
        </NavLink>
        <NavLink to="/">
          <button>Delete note</button>
        </NavLink>
      </div>
    );
  }
}

export default SingleNote;
