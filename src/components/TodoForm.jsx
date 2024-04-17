import { useState } from "react";
import styles from './TodoForm.module.css';

function TodoForm ({setTodos, todos}) {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        const valueInput = e.target.value;
        setInput(valueInput);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!input) return;
        setTodos([...todos, {text: input, id: todos.length}]);
        setInput('');
    }

    return (
        <form className={styles.formTodo} onSubmit={handleSubmit}>
            <h1 className={styles.title}>Todo Project</h1>
            <div className={styles.inputs_wrapper}>
                <input className={styles.task} type="text" placeholder='enter the task here' value={input} onChange={handleChange} />
                <input className={styles.btn} type="submit" value="Add Task" />
            </div>
        </form>
    )
}

export default TodoForm;