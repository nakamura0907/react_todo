import * as React from "react";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import * as ReactDOM from "react-dom";

import { createStore, compose } from "redux";
import rootReducer from "./modules/rootReducer";
const store = createStore(
  rootReducer,
  compose(
    process.env.NODE_ENV === "development" && window.devToolsExtension ? window.devToolsExtension() : (f): void => f
  )
);

import Head from "./components/templates/Head";
import Header from "./components/templates/Header";
import TodoApp from "./components/templates/TodoApp";
import Footer from "./components/templates/Footer";

class App extends React.Component {
  render(): object {
    return (
      <>
        <Head
          description="React.jsで作成した成果物を紹介します。"
          keywords="React React.js Todoリスト"
          title="React.js成果物"
        />
        <GlobalStyle />
        <Header text="TodoList" />
        <TodoApp />
        <Footer />
      </>
    );
  }
}

const GlobalStyle = createGlobalStyle`
#app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 0 24px;
}
* {
    margin: 0;
    padding: 0;
}
body {
    font-family: proximanova, Gidole-Regular, "Helvetica Neue", "Hiragino Kaku Gothic ProN", "Segoe UI", Meiryo, sans-serif;
}
ul{
    list-style-type: none;
}
.is-completed {
    opacity: .5;
}
.is-completed p {
    background: orange;
    text-decoration: line-through;
 }
`;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);

declare global {
  interface Window {
    devToolsExtension: Function;
  }
}
