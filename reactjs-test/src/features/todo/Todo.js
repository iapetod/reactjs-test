import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initTask } from './todoSlice'
import { TodoList } from './components/TodoList'
//import styles from './Todo.module.css'

export function Todo() {
  const todo = useSelector((state) => state.todo.value)
  const dispatch = useDispatch()

  useEffect(() => {
    // Cargamos las tareas del local storage
    const tasksFromLocalStorage = localStorage.getItem("tasks");
    if (tasksFromLocalStorage) {
      dispatch(initTask(JSON.parse(tasksFromLocalStorage)))
    }
  }, [dispatch]);
  return (
    <div>
      <TodoList/>
    </div>
  )
}