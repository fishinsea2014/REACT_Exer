import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => { //{ dispatch } represent the dispatch in store
    let input;
    return(
        <div>
            <form onSubmit={e =>{
                debugger;
                e.preventDefault();
                if (!input.value.trim()){
                    return
                };
                dispatch(addTodo(input.value));
                input.value = '';
            }}>
            <input ref={node => {  //node means the current Dom
                input = node
            }}/>
            <button type='submit'>Add Todo</button>
            </form>
        </div>
    )
};
AddTodo = connect()(AddTodo) //Connect react and redux
export default AddTodo