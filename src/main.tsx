import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { createStore, compose } from "redux";
import rootReducer from "./modules/rootReducer";
const store = createStore(
  rootReducer,
  compose(
    process.env.NODE_ENV === "development" && window.devToolsExtension ? window.devToolsExtension() : (f): void => f
  )
);

import Head from "./components/pages/Head";
import Header from "./components/pages/Header";
import TodoApp from "./components/pages/TodoApp";
import Footer from "./components/pages/Footer";

class App extends React.Component {
  render(): object {
    return (
      <>
        <Head
          title="React.js成果物"
          description="React.jsで作成した成果物を紹介します。"
          keywords="React React.js Todoリスト"
        />
        <Header text="TodoList" />
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
