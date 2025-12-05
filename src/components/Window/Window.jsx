import styles from "./Window.module.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";

export default function Window({ children, title, address, sidebarVariant }) {
  return (
    <div className={styles.window}>
      <Header title={title} address={address} />

      <div className={styles.mainBody}>
        <Sidebar variant={sidebarVariant} />
        {children}
      </div>

      <Footer />
    </div>
  );
}
