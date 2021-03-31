import React, { Component } from 'react'
import TodoListView from '../views/TodoListView'

import { inject, observer } from 'mobx-react';

@inject('todoStore')
@observer
class TodoListContainer extends Component {
    render() {
        return (
            <TodoListView />
        );
    }
}

export default TodoListContainer;