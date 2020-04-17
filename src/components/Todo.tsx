import * as React from "react";

export default class Todo extends React.Component {
  render() {
    return (
      <>
        <div>
          <input type="input" value={this.props.value} onChange={this.props.onChange} />
          <button onClick={this.props.onClick}>{this.props.text}</button>
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
