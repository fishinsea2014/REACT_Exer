import {connect} from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) =>{
    // debugger;
    switch (filter) {
        case 'SHOW_ALL':
         return todos
        case 'SHOW_COMPLETED':
         return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
         return todos.filter (t => !t.completed)
        default:
         throw new Error('Unknown filter' + filter)
    }
}

//Monitor the state 
const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

//Monitor the actions

const mapDispatchToProps = {
    onTodoClick : toggleTodo
}

//connect the state, actions withe the component of TodoList
const VisibleTodoList = connect (
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList