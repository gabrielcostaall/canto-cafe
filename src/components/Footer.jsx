import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.text}>
        Bem-vindo ao <span className={styles.name}>Canto Café</span> · Peça ao garçom
      </p>
    </div>
  );
}
