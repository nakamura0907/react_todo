import * as React from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';

import Nav from './Nav';

export default class Home extends React.Component {

    render() {
        return(
            <>
                <h1 className="title">Home</h1>
                <Nav />
            </>
        );
    }
}
