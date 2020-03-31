import * as React from 'react';

import Btn from '../presentational/atoms/Btn';
import Form from '../presentational/atoms/Form';
import List from '../presentational/atoms/List';

interface IState {
    count: number;
    todos: Array;
    value: string;
}

export default class Todo extends React.Component<{}, IState> {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            todos: [],
            value: ''
        }
    }

    addTodo = () => {
        const {todos, value } = this.state;
        this.setState({
            todos: [...todos, value]
        })
    }

    changeValue = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return(
            <>
                <div className="l-flex">
                    <Form onInputFunction={this.changeValue} value={this.state.value} />
                    <Btn text="ADD!" onClickFunction={this.addTodo} />
                </div>
                <List todos={this.state.todos}/>
            </>
        );
    }
}
