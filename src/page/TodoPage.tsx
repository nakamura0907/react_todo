import * as React from 'react';

import Todo from '../container/Todo';
import Nav from '../Nav';
import Title from '../presentational/atoms/Title';

export default class TodoPage extends React.Component {

    render() {
        return(
            <>
                <Title text="TodoList" />
                <Nav />
                <Todo />
            </>
        );
    }
}
