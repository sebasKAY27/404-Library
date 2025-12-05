import styles from "./Content.module.css";
import ResourceCard from "../ResourceCard/ResourceCard";

const resources = [
  {
    title: "WinXP CSS Kit",
    category: "Components",
    desc: "Complete framework for building Windows XP interfaces.",
    saved: "1,024",
    icon: "chm-0.png",
  },
  {
    title: "ZSH Ultimate",
    category: "Terminals",
    desc: "The ultimate configuration for ZSH users. Oh-My-Zsh ready.",
    saved: "856",
    icon: "console_prompt-0.png",
  },
  {
    title: "Arch Install Guide",
    category: "Guides",
    desc: "Step-by-step guide to installing Arch Linux manually.",
    saved: "2,301",
    icon: "help_book_big-0.png",
  },
  {
    title: "Pixel Icons Pack",
    category: "Customization",
    desc: "500+ free pixel art icons for your retro projects.",
    saved: "542",
    icon: "paint_file-0.png",
  },
  {
    title: "Clippy.js",
    category: "Repositories",
    desc: "Add Clippy to any website with this simple JS library.",
    saved: "9,999",
    icon: "msagent-0.png",
  },
  {
    title: "Vaporwave Mix",
    category: "User Uploads",
    desc: "2 hour mix of the best vaporwave tracks for coding.",
    saved: "128",
    icon: "media_player_stream_no-0.png",
  },
];

export default function Content() {
  return (
    <main className={styles.contentArea}>
      <div className={styles.searchSection}>
        <div className={styles.searchWrapper}>
          <label htmlFor="search">Search Library:</label>
          <input id="search" type="text" placeholder="Type filename or keyword..." />
          <button className={styles.xpButton}>Search</button>
        </div>
      </div>

      <div className={styles.resourceGrid}>
        {resources.map((r) => (
          <ResourceCard key={r.title} resource={r} />
        ))}
      </div>
    </main>
  );
}
