import styles from "./CategoriesPage.module.css";
import ResourceCard from "../../components/ResourceCard/ResourceCard";
import { useNavigate } from "react-router-dom";

const resources = [
  {
    id: "winxp-css",
    title: "WinXP CSS Kit",
    category: "Components",
    desc: "Complete framework for building Windows XP interfaces.",
    saved: "1,024",
    icon: "chm-0.png",
  },
  {
    id: "zsh-ultimate",
    title: "ZSH Ultimate",
    category: "Terminals",
    desc: "The ultimate configuration for ZSH users. Oh-My-Zsh ready.",
    saved: "856",
    icon: "console_prompt-0.png",
  },
  {
    id: "arch-guide",
    title: "Arch Install Guide",
    category: "Guides",
    desc: "Step-by-step guide to installing Arch Linux manually.",
    saved: "2,301",
    icon: "help_book_big-0.png",
  },
  {
    id: "pixel-icons",
    title: "Pixel Icons Pack",
    category: "Customization",
    desc: "500+ free pixel art icons for your retro projects.",
    saved: "542",
    icon: "paint_file-0.png",
  },
];

export default function CategoriesPage() {
  const navigate = useNavigate();

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
          <ResourceCard
            key={r.id}
            resource={r}
            onOpen={() => navigate(`/resource/${r.id}`)}
          />
        ))}
      </div>
    </main>
  );
}
