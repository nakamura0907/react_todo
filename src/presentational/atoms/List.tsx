import * as React from 'react';

const List = (props) => {
    return(
        <ul className="list">
            {props.todos.map((todo, index) =>
                <li key={index} className="item">
                    {todo}
                </li>
            )}
        </ul>
    );
}

export default List;
