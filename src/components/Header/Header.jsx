import styles from "./Header.module.css";

const menuItems = ["File", "Edit", "View", "Favorites", "Tools", "Help"];

export default function Header({ title, address }) {
  return (
    <header className={styles.header}>
      <div className={styles.titleBar}>
        <div className={styles.titleBarText}>
          <img
            src="https://win98icons.alexmeub.com/icons/png/computer_explorer-0.png"
            alt="icon"
            className={styles.windowIcon}
          />
          {title}
        </div>

        <div className={styles.titleBarControls}>
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close" />
        </div>
      </div>

      <div className={styles.menuBar}>
        {menuItems.map((label) => (
          <div className={styles.menuItem} key={label}>
            {label}
          </div>
        ))}
      </div>

      <div className={styles.addressBar}>
        <span className={styles.addressLabel}>Address</span>

        <div className={styles.addressInputWrapper}>
          <img
            src="https://win98icons.alexmeub.com/icons/png/internet_connection_wiz-0.png"
            className={styles.addressIcon}
            alt="ie"
          />
          <input type="text" value={address} readOnly />
        </div>

        <button className={styles.goButton}>Go</button>
      </div>
    </header>
  );
}
