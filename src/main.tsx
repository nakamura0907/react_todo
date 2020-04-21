import * as React from "react";
import * as ReactDOM from "react-dom";
import "./sass/main.sass";
import { Provider } from "react-redux";

import { createStore } from "redux";
import rootReducer from "./modules/rootReducer";
const store = createStore(rootReducer);

import TodoApp from "./components/pages/TodoApp";
import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";

class App extends React.Component {
  render(): object {
    return (
      <>
        <Header />
        <TodoApp />
        <Footer />
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
