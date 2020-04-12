import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import './sass/main.sass';

import Home from './Home';

import TodoPage from './page/TodoPage';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="/todo" component={TodoPage} />
    </Router>
), document.getElementById('app'));
