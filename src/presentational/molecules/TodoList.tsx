import * as React from 'react';

import List from '../atoms/List';

const TodoList = (props) => {
    return(
        <ul className="list l-flex">
            {props.todos.map((todo, index) =>
                <List onClickFunction={props.onClickFunction} index={index} todo={todo} />
            )}
        </ul>
    );
}

export default TodoList;
