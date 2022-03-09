import React, { createContext, Component } from "react";

export const NotesContext = createContext();

class NotesContextProvider extends Component {
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
        date: 1640081621111,
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

  callbackFunction = (childData) => {
    this.setState({ message: childData });
  };
  render() {
    return (
      <NotesContext.Provider value={this.state.notes}>
        {this.props.children}
      </NotesContext.Provider>
    );
  }
}

export default NotesContextProvider;
