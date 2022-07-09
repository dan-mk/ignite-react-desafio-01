import styles from './TaskForm.module.css';
import plusCircle from '../assets/plus-circle.svg';

export function TaskForm() {
    return (
        <form className={styles.container}>
            <input
                className={styles.input}
                type="text"
                placeholder="Adicione uma nova tarefa"
            />
            <button className={styles.button} title="Criar nova tarefa">
                <span>Criar</span>
                <img src={plusCircle} />
            </button>
        </form>
    );
}