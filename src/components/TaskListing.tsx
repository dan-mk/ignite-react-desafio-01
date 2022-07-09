import { TaskListingHeader } from "./TaskListingHeader";
import { TaskComponent } from "./TaskComponent";
import styles from './TaskListing.module.css';
import clipboard from '../assets/clipboard.svg';
import { Task } from "../App";

type TaskListingProps = {
    tasks: Task[];
};

export function TaskListing({ tasks }: TaskListingProps) {
    const isTaskListEmpty = (tasks.length === 0);
    return (
        <div className={styles.container}>
            <TaskListingHeader />
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
                        return <TaskComponent key={task.id} task={task} />;
                    })}
                </div>
            }
        </div>
    );
}
