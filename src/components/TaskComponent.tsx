import styles from './TaskComponent.module.css';
import trash from '../assets/trash.svg';
import check from '../assets/check.svg';
import { Task } from '../App';

type TaskProps = {
    task: Task;
    onToggleTaskStatus: (t: Task) => void;
};

export function TaskComponent({ task, onToggleTaskStatus }: TaskProps) {
    const { content, isComplete } = task;

    function handleChangeTaskStatus() {
        onToggleTaskStatus(task);
    }

    return (
        <div className={styles.container}>
            <div className={styles.checkboxContainer}>
                <label className={
                    `${styles.checkbox} ${isComplete ? styles.completeCheckbox : ''}`
                }>
                    <input
                        checked={isComplete}
                        onChange={handleChangeTaskStatus}
                        type="checkbox"
                    />
                    <img src={check} title="TODO" />
                </label>
            </div>
            <div className={
                `${styles.contentContainer} ${isComplete ? styles.completeContent : ''}`
            }>
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
