import * as React from 'react';

import Btn from '../presentational/atoms/Btn';
import Form from '../presentational/atoms/Form';
import TodoList from '../presentational/molecules/TodoList';

interface IState {
    count: number;
    todos: string[];
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
        });
    }

    removeTodo = (index) => {
        const {todos} = this.state;
        this.setState({
            todos: [...todos.slice(0, index), ...todos.slice(index + 1)]
        });
    }

    render() {
        return(
            <>
                <div className="l-flex form">
                    <Form onChangeFunction={this.changeValue} value={this.state.value} />
                    <Btn text="ADD!" onClickFunction={this.addTodo} />
                </div>
                <TodoList todos={this.state.todos} onClickFunction={this.removeTodo} />
            </>
        );
    }
}
