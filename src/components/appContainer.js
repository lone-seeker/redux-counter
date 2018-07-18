import {Container} from 'flux/utils';
import store from '../data/todoStore';
import Action from '../data/toActions';
import AppView from '../App';

export default Container.createFunctional(
    AppView,
    () => {
        return [store]
    },

    () => {
        return {
            todoList: store.getState(),
            addTodo: Action.addTodo,
            deleteTodo: Action.deleteTodo
        }
    }
)