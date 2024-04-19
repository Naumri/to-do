import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoList ({todos, deleteTask, updateTodoText}) {
    return (
        <>
        <div className={styles.todo_list}>
            <div className={styles.header}>
                <p className={styles.section_name}>MY TASKS</p>
                <div className={styles.line}></div>
            </div>
            <ul>
                { todos.length > 0 ? todos.map((todo, key) => (
                    <Todo key={key} todo={todo} deleteTask={deleteTask} updateTodoText={updateTodoText} />
                )) : (
                    <p>No tasks have been created yet.</p>
                )}
            </ul>
        </div>
        </>
    )
}

export default TodoList;