import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const AppContext = React.createContext(null);

const ContextWrapper = (props) => {
  const [state, setState] = useState({
    notes: [
      {
        id: uuidv4(),
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quae sed corporis reprehenderit sunt est? Eligendi qui, *iste soluta laborum fugiat unde repellendus nihil assumenda perspiciatis error,* quam maxime omnis!",
        date: 1621781410222,
      },
      {
        id: uuidv4(),
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugit dolorum ea tenetur eos assumenda dolore, **reiciendis iure non maxime molestias sed repellat dolores** necessitatibus deserunt id est unde voluptatem porro doloribus? Magnam quasi vitae aut pariatur provident at repellat.",
        date: 1640081621111,
      },
      {
        id: uuidv4(),
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aliquam aspernatur harum sint omnis, aliquid quasi culpa? **Repellat cum maxime animi iusto, modi velit, vero omnis odit fuga consequuntur culpa** autem quia, possimus eum. In praesentium voluptates doloremque, similique ea quibusdam est sequi labore illum!",
        date: 1606681628356,
      },
    ],
  });
  const [store, setStore] = useState({
    noteId: "",
    noteText: "",
    noteDate: "",
  });
  return (
    <AppContext.Provider value={{ state, store, setState, setStore }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextWrapper;
