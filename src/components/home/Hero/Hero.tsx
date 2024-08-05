import styles from "./Hero.module.css";
import { getImageUrl } from "../../../utils";

export function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Amin</h1>
        <p className={styles.description}>
          I'm Amin Beigi. A passionate developer based in Sydney, Australia. 📍
        </p>
        <a href="mailto:me@aminbeigi.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}
