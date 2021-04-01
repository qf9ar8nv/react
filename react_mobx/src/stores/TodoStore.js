import { observable, action, computed } from 'mobx';

class TodoStore {

    @observable
    _todos = [
        { id: 0, text: '리액트 소개', checked: false },
        { id: 1, text: '시작', checked: true },
        { id: 2, text: '합니다', checked: false }
    ]
    @observable
    id = 2;


    @computed
    get todos() {
        return this._todos;
    }

    @action
    add(add_text){
        this._todos.concat({id: this.id, text: add_text, checked: false });
    }
}

export default new TodoStore();