import React, { Component } from "react";
import AddNote from "./AddNote";
import NoteList from "./NoteList";

import "./App.css";
import { NotesContext } from "./context/Context";

class App extends Component {
  static contextType = NotesContext;
  counterId = 5;
  state = {
    notes: this.context,
  };

  // componentDidMount() {
  //   this.setState({
  //     notes: JSON.parse(localStorage.getItem("notes")),
  //   });
  //   // localStorage.setItem("notes", JSON.stringify(this.state.notes));
  // }

  deleteNote = (id) => {
    let notes = [...this.state.notes];
    notes = notes.filter((note) => note.id !== id);
    this.setState({
      notes,
    });
  };

  addNote = (text, date) => {
    if (text === "") return alert("Enter the content.");
    const notes = [...this.state.notes];
    const note = {
      id: this.counterId,
      text,
      date,
    };
    notes.push(note);
    this.counterId++;
    this.setState({
      notes,
    });
    // localStorage.setItem("notes", JSON.stringify(this.state.notes));
    return true;
  };

  // actualisationForm = () => {
  //   localStorage.setItem("notes", JSON.stringify(this.state.notes));
  // };

  render() {
    console.log(this.context);
    return (
      <div>
        <AddNote add={this.addNote} />
        <NoteList notes={this.state.notes} delete={this.deleteNote} />
      </div>
    );
  }
}

export default App;
