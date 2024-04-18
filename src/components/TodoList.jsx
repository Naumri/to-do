import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoList ({todos, deleteTask}) {
    return (
        <>
        <div className={styles.todo_list}>
            <ul>
                { todos.map((todo, key) => (
                    <Todo key={key} todo={todo} deleteTask={deleteTask} />
                ))}
            </ul>
        </div>
        </>
    )
}

export default TodoList;