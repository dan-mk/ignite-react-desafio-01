import { Task } from '../App';
import styles from './TaskListingHeader.module.css';

type TaskListingHeaderProps = {
    tasks: Task[],
};

export function TaskListingHeader({ tasks }: TaskListingHeaderProps) {
    const numberOfTasks = tasks.length;
    const numberOfCompleteTasks = tasks.reduce((sum, task) => {
        return sum + (task.isComplete ? 1 : 0);
    }, 0);

    return (
        <header className={styles.container}>
            <div>
                <span className={styles.createdTasksLabel}>
                    Tarefas criadas
                </span>
                <strong className={styles.numberOfTasksLabel}>
                    {numberOfTasks}
                </strong>
            </div>
            <div>
                <span className={styles.completeTasksLabel}>
                    Concluídas
                </span>
                <strong className={styles.numberOfTasksLabel}>
                    {numberOfTasks === 0 ? 0 : `${numberOfCompleteTasks} de ${numberOfTasks}`}
                </strong>
            </div>
        </header>
    );
}
