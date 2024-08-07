import styles from './About.module.css';
import { getImageUrl } from '../../../utils';

export function About() {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About Me</h2>
            <div className={styles.content}>
                <img
                    src={getImageUrl('about/aboutImage.png')}
                    alt="laptop on a desk"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl('about/serverIcon.png')}
                            alt="UI icon"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>
                                I thrive in creating scalable infrastructures
                                that deliver efficient performance.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl('about/cursorIcon.png')}
                            alt="cursor icon"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>
                                With experience in frontend development, I can
                                contribute across the entire stack and expand my
                                skill set.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl('about/uiIcon.png')}
                            alt="UI icon"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Technical Learning</h3>
                            <p>
                                I'm on a never-ending quest to continuously
                                learn and level up my skills.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}
