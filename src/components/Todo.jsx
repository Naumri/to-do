import { useState } from "react";
import styles from "./Todo.module.css";
import { MdEdit, MdDelete } from "react-icons/md";

function Todo ({todo, deleteTask}) {
    
    const [check, setCheck] = useState(false);
    
    const handleCheck = () => {
        setCheck(!check);
    }

    return (
        <>
        <li className={styles.todo}>
            <div className={styles.title_todo}>
                <input className={styles.checkbox} type="checkbox" id={todo.id} onChange={handleCheck} />
                <span className={`${styles.textTodo} ${check && styles.checked}`}>{todo.text}</span> 
            </div>
            <div className={styles.icon_wrapper}>
                <MdEdit className={styles.icon} />
                <MdDelete className={styles.icon} onClick={() => {deleteTask(todo.id)}} />
            </div>
        </li>
        <div className={styles.line}></div>
        </>
    )
}

export default Todo;