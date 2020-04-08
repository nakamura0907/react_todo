import * as React from 'react';

import List from '../atoms/List';

const TodoList = (props) => {
    return(
        <ul className="list l-flex">
            {props.todos.map((todo, index) =>
                <List onClickFunction={props.onClickFunction} key={todo.id} todo={todo.value} index={index} />
            )}
        </ul>
    );
}

export default TodoList;
