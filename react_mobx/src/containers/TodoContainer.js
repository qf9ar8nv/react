import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
import TodoView from '../views/TodoView';

@inject('todoStore')
@observer
class TodoContainer extends Component {
    render() {
        const todoStore = this.props.todoStore;

        const todoList = todoStore.todos.map(
            ({ id, text, checked }) => (
                <TodoView id={id} text={text} checked={checked} key={id} />
            ));
        return (
            <div>
                {todoList}
                Class 버전 mobx
            </div>
        )
    }
}

export default TodoContainer