import {observable, action, computed} from 'mobx';

class TodoStore{

    @observable
    _todo = {}
}

export default new TodoStore();