import { useEffect, useRef, useState } from "react";
import styles from "./Todo.module.css";
import { MdEdit, MdDelete } from "react-icons/md";

function Todo ({todo, deleteTask, updateTodoText, checkTodo}) {
    
    const [isEdit, setIsEdit] = useState(false);

    const inputEditRef = useRef(null);

    const editTask = (e) => {
        e.preventDefault();
        if(!todo.text.trim()) return;
        if(todo.text.length > 30) return;
        setIsEdit(!isEdit);
    }

    useEffect(() => {
        if(isEdit) {
            inputEditRef.current.focus();
        }
    }, [isEdit]);

    const updateTask = (e) => {
        updateTodoText(todo.id, e.target.value);
    }

    return (
        <>
        <li className={styles.todo} style={{backgroundColor: isEdit && "#21D1D1", borderColor: isEdit && "#21D1D1", padding: isEdit && "8px 8px 8px 16px"}}>
            { isEdit ? (
                    <form className={styles.isEditing} onSubmit={editTask}>
                        <div className={styles.name_task}>
                            <MdEdit className={styles.iconEdit} />
                            <input ref={inputEditRef} className={styles.editText} type="text" value={todo.text} onChange={updateTask} />
                        </div>
                        <input className={styles.btn} type="submit" value="UPDATE TASK" />
                    </form>
                ) : (
                    <>
                    <div className={styles.title_todo}>
                        <input className={styles.checkbox} type="checkbox" id={todo.id} checked={todo.checked} onChange={() => {checkTodo(todo.id)}} />
                        <span className={`${styles.textTodo} ${todo.checked && styles.checked}`}>{todo.text}</span> 
                    </div>
                    <div className={styles.icon_wrapper}>
                        <MdEdit onClick={editTask} className={`${styles.icon} ${styles.edit}`} />
                        <MdDelete className={`${styles.icon} ${styles.delete}`} onClick={() => {deleteTask(todo.id)}} />
                    </div>
                    </>
                )
            }
            
        </li>
        </>
    )
}

export default Todo;