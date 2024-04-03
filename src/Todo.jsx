import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from './redux/slices/todoSlice'


function Todo() {
  const [inputText, setInput] = useState('')
  const todos = useSelector(state => state.todos.todoData)
  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    if (!inputText.trim()) return
    dispatch(addTodo({ 
      id: Math.random(),
      text: inputText,
      completed: false,
    }));
    setInput('')
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInput(e.target.value)}/>
        <button >добавлять</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <button type="button" className="btn btn-outline-danger"  
            onClick={() => dispatch(deleteTodo(todo.id))}>
              <i class="bi bi-trash3"></i></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo