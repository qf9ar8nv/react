import React, { Component } from 'react'

class TodoListView extends Component {
    render() {

        const {todo} = this.props;

        return (
            <div>
                {todo.title}
            </div>
        )
    }
}

export default TodoListView;