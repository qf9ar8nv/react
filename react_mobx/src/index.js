import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import TodoListContainers from './containers/TodoListContainers';
import { Provider } from 'mobx-react';

import todoStore from './stores/TodoStore';

ReactDOM.render(
  <Provider todoStore={todoStore}>
    <TodoListContainers />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
