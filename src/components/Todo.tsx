import * as React from "react";

export default class Todo extends React.Component {
  render() {
    console.log(this.props.todos); // undefinedになる
    return (
      <>
        <div>
          <input type="input" value={this.props.value} onChange={(e) => this.props.onChange(e.target.value)} />
          <button onClick={() => this.props.onClick(this.props.value)}>{this.props.text}</button>
        </div>
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
