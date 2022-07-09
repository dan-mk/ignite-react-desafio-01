import styles from './TaskListingHeader.module.css';

export function TaskListingHeader() {
    return (
        <header className={styles.container}>
            <div>
                <span className={styles.createdTasksLabel}>
                    Tarefas criadas
                </span>
                <strong className={styles.numberOfTasksLabel}>
                    0
                </strong>
            </div>
            <div>
                <span className={styles.completeTasksLabel}>
                    Concluídas
                </span>
                <strong className={styles.numberOfTasksLabel}>
                    0
                </strong>
            </div>
        </header>
    );
}
