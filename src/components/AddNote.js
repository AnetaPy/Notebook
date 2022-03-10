import React, { Component } from "react";
import "./style/AddNote.css";

class AddNote extends Component {
  state = {
    text: "",
    date: null,
  };

  handleText = (e) => {
    this.setState({
      text: e.target.value,
      date: new Date().getTime(),
    });
  };

  cleanForm = () => {
    const { text, date } = this.state;

    const add = this.props.add(text, date);
    if (add) {
      this.setState({
        text: "",
      });
    }
  };

  render() {
    return (
      <div className="form">
        <h2>Note</h2>
        <textarea
          type="text"
          placeholder="Note text"
          value={this.state.text}
          onChange={this.handleText}
        />
        {/* <ReactMarkdown>*React-Markdown* is **Awesome**</ReactMarkdown> */}
        <button onClick={this.cleanForm}>Add note</button>
      </div>
    );
  }
}

export default AddNote;
