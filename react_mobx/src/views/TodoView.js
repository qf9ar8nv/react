import React, { Component } from 'react'

class TodoView extends Component {
    render() {
        const {id, text, checked} = this.props;
        
        return (
            <div>
                {id} {text} {checked}
            </div>
        )
    }
}

export default TodoView;