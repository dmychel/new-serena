import styles from "/src/styles/index.module.scss";

export default function Index() {
  return (
    <div className={styles.index}>
      <div className={styles.carousel}>
        <div className={styles.img_container}>
          <img src="https://placehold.co/600x400" alt="placeholder" />
        </div>
        <div className={styles.img_container}>
          <img src="https://placehold.co/600x400" alt="placeholder" />
        </div>
      </div>
    </div>
  );
}
