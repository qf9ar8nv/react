import { observable, action, computed } from 'mobx';


class TodoStore{

    @observable
    _todo = {
        title : 'test',
    }

    get todo(){
        return this._todo;
    }

}

export default new TodoStore();