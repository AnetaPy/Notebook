import React, { Component } from "react";
import AddNote from "./AddNote";
import NoteList from "./NoteList";

import "./App.css";

class App extends Component {
  counterId = 5;
  state = {
    notes: [
      {
        id: 0,
        text: "blle blee bleeeeeeeee",
        date: 1622081410222,
      },
      {
        id: 1,
        text: "aaaaaaaaaa",
        date: 1649081621111,
      },
      {
        id: 2,
        text: "bbbbbbbbbb",
        date: 1606681628356,
      },
      {
        id: 3,
        text: "ccccccccccccc",
        date: 1646681628250,
      },
      {
        id: 4,
        text: "dddddddddddd",
        date: 1646680628256,
      },
    ],
  };

  deleteNote = (id) => {
    let notes = [...this.state.notes];
    notes = notes.filter((note) => note.id !== id);
    this.setState({
      notes,
    });
  };

  addNote = (text, date) => {
    if (text === "") return alert("Enter the content.");

    const note = {
      id: this.counterId,
      text,
      date,
    };
    this.counterId++;
    this.setState((prevState) => ({
      notes: [...prevState.notes, note],
    }));
    return true;
  };

  render() {
    return (
      <div>
        <AddNote add={this.addNote} />
        <NoteList notes={this.state.notes} delete={this.deleteNote} />
      </div>
    );
  }
}

export default App;
