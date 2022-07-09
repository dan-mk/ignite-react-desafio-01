import { TaskListingHeader } from "./TaskListingHeader";
import { TaskComponent } from "./TaskComponent";
import styles from './TaskListing.module.css';
import clipboard from '../assets/clipboard.svg';
import { Task } from "../App";

type TaskListingProps = {
    tasks: Task[];
    onToggleTaskStatus: (t: Task) => void;
};

export function TaskListing({ tasks, onToggleTaskStatus }: TaskListingProps) {
    const isTaskListEmpty = (tasks.length === 0);
    return (
        <div className={styles.container}>
            <TaskListingHeader tasks={tasks} />
            {isTaskListEmpty ?
                <div className={styles.emptyListingContainer}>
                    <img src={clipboard} />
                    <div>
                        <p><b>Você ainda não tem tarefas cadastradas</b></p>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                </div>
                :
                <div className={styles.tasksContainer}>
                    {tasks.map((task) => {
                        return (
                            <TaskComponent
                                key={task.id}
                                task={task}
                                onToggleTaskStatus={onToggleTaskStatus}
                            />
                        );
                    })}
                </div>
            }
        </div>
    );
}
