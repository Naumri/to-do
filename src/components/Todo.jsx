import styles from "./Todo.module.css";

function Todo ({todo, deleteTodo}) {
    return (
        <>
        <li className={styles.todo}><span className={styles.textTodo}>{todo.text}</span> 
        <button className={styles.btn}>Edit</button>
        <button className={styles.btn}>Delete</button>
        </li>
        </>
    )
}

export default Todo;