import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";

const iconUrl = (name) => `https://win98icons.alexmeub.com/icons/png/${name}`;

const variants = {
  categories: [
    {
      title: "Library Tasks",
      links: [
        { to: "/categories", label: "All Resources", icon: "directory_open_file_mydocs-0.png" },
        { to: "/resource/winxp-css", label: "Featured Resource", icon: "chm-0.png" },
      ],
    },
    {
      title: "Categories",
      links: [
        { to: "/categories?c=Guides", label: "Guides", icon: "help_book_big-0.png" },
        { to: "/categories?c=Terminals", label: "Terminals", icon: "console_prompt-0.png" },
        { to: "/categories?c=Components", label: "Components", icon: "component-0.png" },
        { to: "/categories?c=Customization", label: "Customization", icon: "desk_properties-0.png" },
      ],
    },
  ],

  resource: [
    {
      title: "Navigation",
      links: [
        { to: "/categories", label: "Home", icon: "computer_explorer-0.png" },
        { to: "/categories", label: "Browse All", icon: "directory_open_file_mydocs-0.png" },
        // Submit después
      ],
    },
    {
      title: "Tip",
      tip: "💡 Always backup your files before applying patches!",
    },
  ],
};

export default function Sidebar({ variant = "categories" }) {
  const panels = variants[variant] ?? variants.categories;

  return (
    <aside className={styles.sidebar}>
      {panels.map((p) => (
        <div className={styles.sidebarPanel} key={p.title}>
          <div className={styles.panelHeader}>
            <span className={styles.panelTitle}>{p.title}</span>
            <button className={styles.panelToggle} aria-label="Toggle panel" />
          </div>

          {p.tip ? (
            <div className={`${styles.panelContent} ${styles.tipContent}`}>
              <p className={styles.tipText}>{p.tip}</p>
            </div>
          ) : (
            <div className={styles.panelContent}>
              {p.links.map((l) => (
                <Link className={styles.sidebarLink} to={l.to} key={l.label}>
                  <img src={iconUrl(l.icon)} alt="" />
                  <span>{l.label}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
}
