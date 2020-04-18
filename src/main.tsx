import * as React from "react";
import * as ReactDOM from "react-dom";
import "./sass/main.sass";
import { Provider } from "react-redux";

import { createStore } from "redux";
import todolist from "./reducers/reducers";
const store = createStore(todolist);

import TodoApp from "./components/pages/TodoApp";

class App extends React.Component {
  render() {
    return (
      <>
        <TodoApp />
      </>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
