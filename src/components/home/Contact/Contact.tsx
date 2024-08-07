import styles from './Contact.module.css';
import { getImageUrl } from '../../../utils';

export function Contact() {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img
                        src={getImageUrl('contact/emailIcon.png')}
                        alt="email icon"
                    />
                    <a href="mailto:me@aminbeigi.com">me@aminbeigi.com</a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl('contact/linkedinIcon.png')}
                        alt="LinkedIn icon"
                    />
                    <a href="https://www.linkedin.com/in/amin-beigi/">
                        linkedin.com/in/amin-beigi
                    </a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl('contact/githubIcon.png')}
                        alt="Github icon"
                    />
                    <a href="https://www.github.com/aminbeigi">
                        github.com/aminbeigi
                    </a>
                </li>
            </ul>
        </footer>
    );
}
