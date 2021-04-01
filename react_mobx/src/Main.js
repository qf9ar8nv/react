import { Provider } from 'mobx-react';
import React from 'react'

import TodoEditFormContainer from './containers/TodoEditFormContainer';
import TodoListContainer from './containers/TodoListContainer';
import HeaderView from './views/HeaderView';
import TodoContainer from './containers/TodoContainer';

import todoStore from './stores/TodoStore';

function Main() {
    return (
        <div>
            <HeaderView />
            <Provider todoStore={todoStore}>
                <TodoEditFormContainer />
                <TodoListContainer />
                <br />
                <TodoContainer />
            </Provider>
        </div>
    )
}

export default Main;