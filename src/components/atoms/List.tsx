import * as React from "react";

import Btn from "./Btn";

interface Props {
  index: number;
  todo: string;
  onClickFunction: (index: number) => void;
}

interface State {
  active: boolean;
}

class List extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  changeActive = (): void => {
    this.setState({
      active: !this.state.active,
    });
  };

  render() {
    return (
      <li className={"list-item l-flex" + (this.state.active ? " is-active" : "")}>
        <i
          onClick={this.changeActive}
          className={"far list-icon" + (this.state.active ? " fa-check-square" : " fa-square")}></i>
        <p>{this.props.todo}</p>
        <Btn text="remove!" onClickFunction={(): void => this.props.onClickFunction(this.props.index)} />
      </li>
    );
  }
}

export default List;
