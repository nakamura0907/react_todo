import * as React from "react";
import * as ReactDOM from "react-dom";
import "./sass/main.sass";

import Todo from "./components/pages/Todo";

class App extends React.Component {
  render() {
    return (
      <>
        <Todo />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
