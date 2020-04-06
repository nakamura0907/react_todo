import * as React from 'react';

import Btn from './Btn';

interface IProps {
    index: any;
    todo: string;
    onClickFunction: any;
}

interface IState {
    active: boolean;
}

class List extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        }
    }

    changeActive = () => {
        this.setState({
            active: !this.state.active,
        });
    }

    render() {
        return(
            <li key={this.props.index} className={"list-item l-flex" + (this.state.active ? " is-active" : "")} >
                <i onClick={this.changeActive} className={"far list-icon" + (this.state.active ? " fa-check-square" : " fa-square")}></i>
                <p>{this.props.todo}</p>
                <Btn text="remove!" onClickFunction={() => this.props.onClickFunction(this.props.index)} />
            </li>
        );
    }
}

export default List;
