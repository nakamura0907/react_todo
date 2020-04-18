import * as React from "react";
import styled from "styled-components";

import Btn from "./Btn";

interface Props {
  index: number;
  todo: string;
  onClickFunction: (index: number) => void;
}

interface State {
  active: boolean;
}

const ListLiStyled = styled.li`
  box-sizing: border-box;
  margin-top: 15px;
  padding: 0 24px;
  width: 100%;
`;

const ListIStyled = styled.i`
  margin-right: 10px;
  font-size: 32px;
`;

const ListPStyled = styled.p`
  flex-grow: 10;
  margin-right: 10px;
  overflow: scroll;
  -ms-overflow-style: none;
  text-align: left;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ListButtonStyled = styled.button`
  background: red;
  color: white;
`;

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

  render(): object {
    return (
      <ListLiStyled className={"list-item l-flex" + (this.state.active ? " is-active" : "")}>
        <ListIStyled
          onClick={this.changeActive}
          className={"far list-icon" + (this.state.active ? " fa-check-square" : " fa-square")}
        ></ListIStyled>
        <ListPStyled>{this.props.todo}</ListPStyled>
        <Btn text="remove!" onClickFunction={(): void => this.props.onClickFunction(this.props.index)} />
      </ListLiStyled>
    );
  }
}

export default List;
