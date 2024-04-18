import { useState } from "react";
import styles from './TodoForm.module.css';

function TodoForm ({setTodos, todos}) {
    const [input, setInput] = useState('');
    const [id, setId] = useState(0);

    const handleChange = (e) => {
        const valueInput = e.target.value;
        setInput(valueInput);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!input.trim()) return;
        if(input.length > 20) return;
        setId(prev => prev + 1);
        setTodos([...todos, {text: input, id: id}]);
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