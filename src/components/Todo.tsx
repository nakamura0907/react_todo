import * as React from "react";

import { LFlex } from "./styled/Styled";
import Form from "./atoms/Form";
import Btn from "./atoms/Btn";

export default class Todo extends React.Component {
  render() {
    console.log(this.props.todos); // undefinedになる
    return (
      <>
        <LFlex style={{ padding: "0 24px" }}>
          <Form value={this.props.value} onChangeFunction={(e) => this.props.onChange(e.target.value)} />
          <Btn onClickFunction={() => this.props.onClick(this.props.value)} text={this.props.text} />
        </LFlex>
        <ul>
          {this.props.todos.map((todo, index) => (
            <li key={index}>
              <p>{todo}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
