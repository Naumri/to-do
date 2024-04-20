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
        if(input.length > 30) return;
        setId(prev => prev + 1);
        setTodos([...todos, {text: input, id: id, checked: false}]);
        setInput('');
    }

    return (
        <form className={styles.formTodo} onSubmit={handleSubmit}>
            <div className={styles.header}>
                <p className={styles.project_name}>TO-DO LIST</p>
                <div className={styles.line}></div>
                <h1 className={styles.title}>What are today's tasks?</h1>
            </div>
            <div className={styles.inputs_wrapper}>
                <input className={styles.task} type="text" placeholder='enter the task here...' value={input} onChange={handleChange} />
                <input className={styles.btn} type="submit" value="ADD TASK" />
            </div>
        </form>
    )
}

export default TodoForm;