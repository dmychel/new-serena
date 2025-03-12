import Carousel from "../components/Carousel";
import styles from "/src/styles/index.module.scss";

export default function Index() {
  return (
    <div className={styles.index}>
      <Carousel />
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
