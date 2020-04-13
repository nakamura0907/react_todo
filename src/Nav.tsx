import * as React from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';

export default class Nav extends React.Component {

    render() {
        return(
            <>
                <ul className="nav-list l-flex">
                    <li className="nav-list-item"><Link to="/">Homeへ</Link></li>
                    <li className="nav-list-item"><Link to="/todo">TodoListへ</Link></li>
                    <li className="nav-list-item"><Link to="/">随時追加</Link></li>
                </ul>
            </>
        );
    }
}
