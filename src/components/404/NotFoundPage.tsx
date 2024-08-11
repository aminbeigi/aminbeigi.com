import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

export function NotFoundPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404 - Page Not Found</h1>
            <p className={styles.message}>
                The page you are looking for does not exist :(
            </p>
            <Link to="/" className={styles.homeLink}>
                Go to Homepage
            </Link>
        </div>
    );
}
