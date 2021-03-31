import { observer } from 'mobx-react';
import React from 'react'

@observer
function TodoEditFormContainer() {
    return (
        <TodoEditFormView />
    )
}

export default TodoEditFormContainer;