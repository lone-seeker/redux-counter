import Dispatcher from './Dispatcher';

const Action = {
    addTodo (inputText) {
        Dispatcher.dispatch({type:'ADD_TODO', inputText})
    },
    deleteTodo (index) {
        Dispatcher.dispatch({type:'DELETE_TODO', index})
    }
}


export default Action;
