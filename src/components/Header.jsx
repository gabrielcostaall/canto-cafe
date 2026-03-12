import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logoCircle}>☕</div>
      <div className={styles.title}>Canto Café</div>
      <div className={styles.subtitle}>Cardápio</div>
      <div className={styles.divider} />
    </div>
  );
}
