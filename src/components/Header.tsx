import styles from './Header.module.css';
import rocket from '../assets/rocket.svg';

export function Header() {
    return (
        <header className={styles.container}>
            <div className="wrapper">
                <h1 className={styles.title}>
                    <img src={rocket} alt="Rocket icon" />
                    <span>
                        <span className={styles.to}>to</span>
                        <span className={styles.do}>do</span>
                    </span>
                </h1>
            </div>
        </header>
    );
}
