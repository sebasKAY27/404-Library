import styles from "./ResourceDetailsPage.module.css";
import { Link, useParams } from "react-router-dom";

const db = {
  "winxp-css": {
    title: "WinXP CSS Framework",
    uploader: "PixelMaster",
    date: "Oct 24, 2004",
    category: "Code",
    desc:
      "This is a comprehensive CSS framework designed to replicate the look and feel of Windows XP. It includes styles for windows, buttons, tabs, and more. Perfect for your retro personal homepage or web app.",
    features: [
      "Authentic blue gradients",
      "Pixel-perfect borders",
      "Lightweight (only 15kb)",
      "No JavaScript required",
    ],
  },
};

export default function ResourceDetailsPage() {
  const { id } = useParams();
  const resource = db[id] ?? db["winxp-css"];

  return (
    <main className={styles.contentArea}>
      <div className={styles.searchSection}>
        <div className={styles.searchWrapper}>
          <Link to="/categories" className={styles.xpButtonLink}>
            ← Back to Library
          </Link>
        </div>
      </div>

      <div className={styles.panel}>
        <div className={styles.topRow}>
          <div className={styles.screenshotBox}>SCREENSHOT</div>

          <div className={styles.meta}>
            <h1 className={styles.title}>{resource.title}</h1>

            <div className={styles.submeta}>
              Uploaded by: <strong>{resource.uploader}</strong> | Date:{" "}
              <strong>{resource.date}</strong> | Category:{" "}
              <strong>{resource.category}</strong>
            </div>

            <div className={styles.buttons}>
              <button className={`${styles.xpButton} ${styles.saveBtn}`}>
                Download (1.2 MB)
              </button>
              <button className={styles.xpButton}>Add to Favorites ⭐</button>
            </div>
          </div>
        </div>

        <div className={styles.box}>
          <h3 className={styles.h3}>Description</h3>
          <p className={styles.p}>{resource.desc}</p>

          <p className={styles.p}><strong>Features:</strong></p>
          <ul className={styles.ul}>
            {resource.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>

        <div className={styles.box}>
          <h3 className={styles.h3WithLine}>User Comments</h3>

          <div className={styles.comment}>
            <div className={styles.commentAuthor}>RetroFan99 says:</div>
            <div className={styles.commentText}>
              This is exactly what I was looking for! Thanks for sharing.
            </div>
          </div>

          <div className={styles.comment}>
            <div className={styles.commentAuthor}>WebSurfer says:</div>
            <div className={styles.commentText}>
              Does this work on Netscape Navigator 4.0?
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
