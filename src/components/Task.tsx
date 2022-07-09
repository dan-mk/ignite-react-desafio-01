import styles from './Task.module.css';
import trash from '../assets/trash.svg';
import check from '../assets/check.svg';

export function Task() {
    return (
        <div className={styles.container}>
            <div className={styles.checkboxContainer}>
                <input id="checkbox" type="checkbox" />
                <label className={styles.checkbox}>
                    <img src={check} title="TODO" />
                </label>
            </div>
            <div className={styles.contentContainer}>
                <p>Something that is so big that will take more than one line to show so I need to keep going it's still not there</p>
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
