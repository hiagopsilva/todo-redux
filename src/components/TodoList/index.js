import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

function addTodoAction(title) {
  return { type: 'ADD_TODO', title }
}

export default function TodoList() {
  const todos = useSelector(state => state.data);
  const dispatch = useDispatch();

  function addTodo() {
    dispatch(addTodoAction('sleep')) 
  }

  return (
    <>
    <ul>
      { todos.map(todo => <li key={todo}>{todo}</li>) }
    </ul>

    <button type="button" onClick={addTodo}>Add todo</button>
    </>
  )
}

