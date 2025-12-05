import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerStart}>
        <button className={styles.startButton}>
          <img
            src="https://win98icons.alexmeub.com/icons/png/windows-0.png"
            alt="logo"
          />
          Start
        </button>
      </div>

      <div className={styles.taskbar}>
        <div className={`${styles.taskItem} ${styles.active}`}>
          <img
            src="https://win98icons.alexmeub.com/icons/png/computer_explorer-0.png"
            alt=""
          />
          404 Retro Library
        </div>
      </div>

      <div className={styles.tray}>
        <img
          src="https://win98icons.alexmeub.com/icons/png/loudspeaker_rays-0.png"
          alt="sound"
        />
        <span className={styles.time}>12:00 PM</span>
      </div>
    </footer>
  );
}
