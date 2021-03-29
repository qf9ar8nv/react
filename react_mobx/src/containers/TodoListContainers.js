import React, { Component } from 'react'
import TodoListView from '../views/TodoListView'

import { inject, observer } from 'mobx-react';

@inject('todoStore')
@observer
class TodoListContainers extends Component {
    render() {

        const { todoStore } = this.props;

        return (
            <div>
                <TodoListView 
                todo = {todoStore.todo}
                />
            </div>
        )
    }
}

export default TodoListContainers;