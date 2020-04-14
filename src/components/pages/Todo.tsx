import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';

import Btn from '../atoms/Btn';
import Form from '../atoms/Form';
import TodoList from '../molecules/TodoList';

interface TodoItem {
    id: string;
    value: string;
}

interface IState {
    count: number;
    todos: TodoItem[];
    value: string;
}

export default class Todo extends React.Component<{}, IState> {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            todos: [],
            value: '',
        }
    }

    addTodo = () => {
        const {todos, value } = this.state;
        if (value) {
            this.setState({
                todos: [...todos, { id: uuidv4(), value }],
                value: ''
            });
        }
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
