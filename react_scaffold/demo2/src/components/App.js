import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

//AddTodo component input data, stored in state
// VisibleTodoList show the sate according to the events
// Footer change the filter conditions
const App = () =>(
    <div>
        <AddTodo/>
        <VisibleTodoList />
        <Footer />
    </div>
)

export default App