import * as React from 'react';

const List = (props) => {
    return(
        <ul className="list l-flex">
            {props.todos.map((todo, index) =>
                <li key={index} className="list-item l-flex">
                    <i className="far fa-square list-icon"></i>
                    <p>{todo}</p>
                </li>
            )}
        </ul>
    );
}

export default List;