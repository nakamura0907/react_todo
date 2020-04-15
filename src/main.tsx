import * as React from "react";
import * as ReactDOM from "react-dom";
import "./sass/main.sass";

import Todo from "./components/organisms/Todo";

class App extends React.Component {
  render(): object {
    return (
      <>
        <Todo />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
