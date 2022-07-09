import { TaskListingHeader } from "./TaskListingHeader";
import styles from './TaskListing.module.css';
import clipboard from '../assets/clipboard.svg';

const tasks = [
    // {
    //     id: 1,
    //     content: 'Something',
    //     isComplete: true,
    // },
    // {
    //     id: 2,
    //     content: 'Something else',
    //     isComplete: false,
    // }
];

export function TaskListing() {
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
                <div>Listing</div>
            }
        </div>
    );
}
