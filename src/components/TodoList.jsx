import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoList ({todos, setTodos}) {
    return (
        <>
        <div className={styles.todo_list}>
            <ul>
                { todos.map((todo, index) => (
                    <Todo key={index} todo={todo} />
                ))}
            </ul>
        </div>
        </>
    )
}

export default TodoList;