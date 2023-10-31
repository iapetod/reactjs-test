import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTask, updateTask } from "../todoSlice";
//import styles from './Todo.module.css'

export function TodoItem({ index, item }) {
  const [task, setTask] = useState({
    data:"",
    edit:false
  });
  const dispatch = useDispatch();
  const removeTaskFromList = (i) => {
    dispatch(removeTask(i));
  };
  const saveTaskFromList = (i) => {
    setTask({...task,edit:false});
    if(task.data!=""){
        dispatch(updateTask({index,data:{...item,label:task.data}}))
    }
  };
  const checked = () => {
    return "item-checked";
  };
  const handleKeyUp = (event)=>{
    if(event.key == 'Enter'){
        setTask({...task,edit:false});
        dispatch(updateTask({index,data:{...item,label:task.data}}))
    }
    if(event.key == 'Escape'){
        setTask({...task,edit:false});
    }
  }
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={item.checked}
        onChange={($event) =>
          dispatch(
            updateTask({ index, data: { ...item, checked: !item.checked } })
          )
        }
      />
      {(!task.edit)?<div className={` ${item.checked ? "item-checked" : ""}`}>
        {item.label}
        <button onClick={() => setTask({data:item.label,edit:true})}>Editar</button>
      </div>:<div className="edit-form">
        <input autoFocus onKeyUp={handleKeyUp} onChange={($event)=>setTask({...task,data:$event.target.value})} value={task.data}/>
        <button disabled={task.data==""} onClick={()=>saveTaskFromList()}>Guardar</button>
        <button onClick={() => setTask({...task,edit:false})}>Cancelar</button>
      </div>}
      <button onClick={() => removeTaskFromList(index)}>X</button>
    </li>
  );
}
