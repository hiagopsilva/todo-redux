import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

function addTodoAction(title) {
  return { type: 'ADD_TODO', title }
}

export default function TodoList() {
  const todos = useSelector(state => state.data);
  const dispatch = useDispatch();
  
  const [newTodo, setNewTodo] = useState();

  function addTodo() {
    dispatch(addTodoAction(newTodo));
    setNewTodo('');
  }
  

  return (
    <>
    <ul>
      { todos.map(todo => <li key={todo}>{todo}</li>) }
    </ul>

    <form>
      <input placeholder="add a new todo"  value={newTodo} onChange={e => setNewTodo(e.target.value)} />
      <button type="button" onClick={addTodo}>Add todo</button>
    </form>
    </>
  )
}

