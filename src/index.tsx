import * as React from "react";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import { render } from "react-dom";

import { GlobalStyle } from "@utils/styled/Global";
import "@utils/Calendar.css";

import reducers from "@module";
const store = createStore(
  reducers,
  compose(
    process.env.NODE_ENV === "development" && window.devToolsExtension ? window.devToolsExtension() : (f): void => f
  )
);

import Footer from "@component/templates/Footer";
import Head from "@component/templates/Head";
import Header from "@component/templates/Header";
import Main from "@component/templates/Main";

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
        <Main />
        <Footer />
      </>
    );
  }
}

render(
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
