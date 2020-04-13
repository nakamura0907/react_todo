import * as React from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';

import Nav from './Nav';
import Title from './presentational/atoms/Title';

export default class Home extends React.Component {

    render() {
        return(
            <>
                <Title text="Home" />
                <Nav />
            </>
        );
    }
}
