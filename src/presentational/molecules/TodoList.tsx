import * as React from 'react';

import Btn from '../atoms/Btn';

const TodoList = (props) => {
    return(
        <ul className="list l-flex">
            {props.todos.map((todo, index) =>
                <li key={index} className="list-item l-flex">
                    <i className="far fa-square list-icon"></i>
                    <p>{todo}</p>
                    <Btn text="remove!" onClickFunction={() => props.onClickFunction(index)} />
                </li>
            )}
        </ul>
    );
}

export default TodoList;
