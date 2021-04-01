import { inject, observer } from 'mobx-react';
import React from 'react'
import TodoEditFormView from '../views/TodoEditFormView'

const onHandleTodo = () => {

}

const TodoEditFormContainer = observer(() => {
    return (
        <>
            <TodoEditFormView />
            <input />
            <button onClick={onHandleTodo}>
                추가
            </button>
        </>
    )
})

export default TodoEditFormContainer;