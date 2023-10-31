import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTask } from '../todoSlice';
//import styles from './Todo.module.css'

export function TodoForm() {
    const todoList = useSelector((state) => state.todo.list)
    const [todo, setTodo] = useState([]);
    const dispatch = useDispatch();
    const addTaskToList=(event)=>{
        if(todo!=""){
            if(event.key=='Enter'){
                console.log(todo)
                setTodo("")
                dispatch(addTask(todo));
            }
        }
    }
    const addTaskToListB=(event)=>{
        if(todo!=""){
            console.log(todo)
            setTodo("")
            dispatch(addTask(todo));
        }
    }
  return (
    <li>
        <div className="form-group">
        <input className="input-form" placeholder='Escribe la tarea y presiona enter' onKeyUp={addTaskToList} value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button disabled={todo==''} onClick={addTaskToListB}>Agregar</button>
        </div>
        <div className="text-warning">No es posible agregar una tarea vacia</div>
    </li>
  )
}