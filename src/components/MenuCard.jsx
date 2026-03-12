import { TAG_COLORS } from "../data/constants";
import styles from "./MenuCard.module.css";

export default function MenuCard({ item, featured = false }) {
  return (
    <div className={`${styles.card} ${featured ? styles.featured : ""}`}>
      <div className={styles.imgWrap}>
        <img src={item.image} alt={item.name} loading="lazy" />
      </div>

      <div className={styles.body}>
        <div className={styles.top}>
          <div className={styles.name}>{item.name}</div>
          {item.tag && (
            <span
              className={styles.tag}
              style={{
                background: TAG_COLORS[item.tag]?.bg,
                color: TAG_COLORS[item.tag]?.color,
              }}
            >
              {item.tag}
            </span>
          )}
        </div>

        <div className={styles.description}>{item.description}</div>

        <div className={styles.footer}>
          <div className={styles.price}>{item.price}</div>
          <div className={styles.dot} />
        </div>
      </div>
    </div>
  );
}
