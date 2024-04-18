import { useState } from "react";
import styles from "./Todo.module.css";

function Todo ({todo, deleteTask}) {
    
    const [check, setCheck] = useState(false);
    
    const handleCheck = () => {
        setCheck(!check);
    }

    return (
        <>
        <li className={styles.todo}>
        <input type="checkbox" id={todo.id} onChange={handleCheck} />
        <span className={`${styles.textTodo} ${check && styles.checked}`}>{todo.text}</span> 
        <button className={styles.btn}>Edit</button>
        <button onClick={() => {deleteTask(todo.id)}} className={styles.btn}>Delete</button>
        </li>
        </>
    )
}

export default Todo;