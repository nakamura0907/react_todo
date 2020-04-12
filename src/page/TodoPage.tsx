import * as React from 'react';
import Todo from '../container/Todo';
import Nav from '../Nav';

export default class TodoPage extends React.Component {

    render() {
        return(
            <>
                <h1 className="title">TodoList</h1>
                <Nav />
                <Todo />
            </>
        );
    }
}
