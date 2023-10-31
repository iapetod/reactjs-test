import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TodoItem } from './TodoItem'
import { TodoForm } from './TodoForm'
//import styles from './Todo.module.css'

export function TodoList() {
  const todo = useSelector((state) => state.todo.list)

  return (
    <div className="container">
        <ul className="todo-list">
            <li className="todo-item"><h1>Lista de tareas</h1></li>
            {todo.map((todo,index) => (
                <TodoItem index={index} item={todo}  key={index}/>
            ))}
            <TodoForm/>
        </ul>
    </div>
  )
}