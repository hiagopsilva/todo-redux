import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { BsPlus } from 'react-icons/bs';

import './styles.css';

function addTodoAction(title) {
  return { type: 'ADD_TODO', title }
}

export default function TodoList() {
  const todos = useSelector(state => state.data);
  const dispatch = useDispatch();
  
  const [newTodo, setNewTodo] = useState('');

  function addTodo() {
    dispatch(addTodoAction(newTodo));
    setNewTodo('');
  }
  
  return (
    <div className="containerTodo">
      <form>
        <input className="inputTodo" placeholder="add a new todo"  value={newTodo} onChange={e => setNewTodo(e.target.value)} />
        <button className="buttonAddTodo" type="button" onClick={newTodo == '' ? '' : addTodo}><h1><BsPlus /></h1></button>
      </form>
      

      <div className="todoList">
        <ul>
          { todos.map(todo => <li className="todo" key={todo}>{todo}</li>) }
        </ul>
      </div>
    </div>
  )
}

