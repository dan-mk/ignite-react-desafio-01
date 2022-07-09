import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './TaskForm.module.css';
import plusCircle from '../assets/plus-circle.svg';

type TaskFormProps = {
    onAddNewTask: (s: string) => void;
};

export function TaskForm({ onAddNewTask }: TaskFormProps) {
    const [content, setContent] = useState('');

    function handleAddNewTask(event: FormEvent) {
        event.preventDefault();
        onAddNewTask(content.trim());
        setContent('');
    }

    function handleChangeTaskContent(event: ChangeEvent<HTMLInputElement>) {
        setContent(event.target.value);
    }

    const isSubmitDisabled = (content.trim() === '');

    return (
        <form
            className={styles.container}
            onSubmit={handleAddNewTask}
        >
            <input
                className={styles.input}
                type="text"
                placeholder="Adicione uma nova tarefa"
                value={content}
                onChange={handleChangeTaskContent}
            />
            <button
                type="submit"
                className={styles.button}
                title="Criar nova tarefa"
                disabled={isSubmitDisabled}
            >
                <span>Criar</span>
                <img src={plusCircle} />
            </button>
        </form>
    );
}