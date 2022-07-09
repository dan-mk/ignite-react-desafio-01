import { FormEvent } from 'react';
import styles from './TaskForm.module.css';
import plusCircle from '../assets/plus-circle.svg';

type TaskFormProps = {
    onAddNewTask: (s: string) => void;
};

export function TaskForm({ onAddNewTask }: TaskFormProps) {
    function handleAddNewTask(event: FormEvent) {
        event.preventDefault();
        onAddNewTask('Test');
    }

    return (
        <form
            className={styles.container}
            onSubmit={handleAddNewTask}
        >
            <input
                className={styles.input}
                type="text"
                placeholder="Adicione uma nova tarefa"
            />
            <button
                type="submit"
                className={styles.button}
                title="Criar nova tarefa"
            >
                <span>Criar</span>
                <img src={plusCircle} />
            </button>
        </form>
    );
}