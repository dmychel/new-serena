import styles from "/src/styles/index.module.scss";

export default function Index() {
  return (
    <div className={styles.index}>
      <div className="carousel">
        <img src="https://placehold.co/600x400" alt="placeholder" />
        <img src="https://placehold.co/600x400" alt="placeholder" />
        <img src="https://placehold.co/600x400" alt="placeholder" />
      </div>
    </div>
  );
}
