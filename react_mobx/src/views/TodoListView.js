import React, { Component } from 'react'

class TodoListView extends Component {
    render() {

        const { todo } = this.props;
        console.log(todo);

        return (
            <div>
                TodoListView!!
            </div>
        )
    }
}

export default TodoListView;