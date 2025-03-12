import styles from "/src/styles/index.module.scss";

export default function Index() {
  return (
    <div className={styles.index}>
      {/* carousel */}
      <div className={styles.carousel}>
        {/* carousel center text */}
        <div className={styles.carousel_text}>
          <h1>New Serena Bar & Lounge</h1>
        </div>
        <div className={styles.img_container}>
          <img src="https://placehold.co/600x400" alt="placeholder" />
        </div>
        <div className={styles.img_container}>
          <img src="https://placehold.co/600x400" alt="placeholder" />
        </div>
      </div>

      <div className={styles.accolades}>
        <div className={styles.achievement}>
          <img src="/assets/images/buzzfeed.avif" alt="Buzzfeed" />
          <p>"Bars in America you should go to before you die"</p>
        </div>
        <div className={styles.achievement}>
          <img src="/assets/images/citystyle.avif" alt="City Life Style" />
          <p>"The iconic Serena Lounge"</p>
        </div>
      </div>
    </div>
  );
}
