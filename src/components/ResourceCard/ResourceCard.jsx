import styles from "./ResourceCard.module.css";

const iconUrl = (name) => `https://win98icons.alexmeub.com/icons/png/${name}`;

export default function ResourceCard({ resource, onOpen }) {
  return (
    <div className={styles.card} onClick={onOpen}>
      <div className={styles.icon}>
        <img src={iconUrl(resource.icon)} alt="resource" />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{resource.title}</h3>
        <span className={styles.category}>{resource.category}</span>
        <p className={styles.desc}>{resource.desc}</p>

        <div className={styles.stats}>
          <span>Saved: {resource.saved}</span>
        </div>

        <div className={styles.actions} onClick={(e) => e.stopPropagation()}>
          <button className={styles.xpButton} onClick={onOpen}>OPEN</button>
          <button className={`${styles.xpButton} ${styles.saveBtn}`}>SAVE ⭐</button>
        </div>
      </div>
    </div>
  );
}
