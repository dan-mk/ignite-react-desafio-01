import styles from './TaskComponent.module.css';
import trash from '../assets/trash.svg';
import check from '../assets/check.svg';
import { Task } from '../App';

type TaskProps = {
    task: Task;
};

export function TaskComponent({ task }: TaskProps) {
    const { content, isComplete } = task;

    return (
        <div className={styles.container}>
            <div className={styles.checkboxContainer}>
                <input checked={isComplete} id="checkbox" type="checkbox" />
                <label className={styles.checkbox}>
                    <img src={check} title="TODO" />
                </label>
            </div>
            <div className={styles.contentContainer}>
                <p>{content}</p>
            </div>
            <div>
                <button className={styles.deleteButton}>
                    <img
                        src={trash}
                        className={styles.deleteIcon}
                        alt="Deletar tarefa"
                        title="Deletar tarefa"
                    />
                </button>
            </div>
        </div>
    );
}
