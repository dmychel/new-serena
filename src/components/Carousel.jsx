import { useState } from "react";
import styles from "/src/styles/index.module.scss";

export default function Carousel() {
  const arr = [
    {
      src: "/assets/images/inside.webp",
      alt: "Inside",
    },
    {
      src: "/assets/images/inside2.png",
      alt: "Inside 2",
    },
  ];

  const [index, setIndex] = useState(0);
  const [image, setImage] = useState(arr[index]);

  function updateCarousel() {
    if (index === arr.length - 1) {
      return setIndex(0), setImage(arr[index]);
    } else {
      return setIndex(index + 1), setImage(arr[index]);
    }
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel_text}>
        <h1>New Serena Bar & Lounge</h1>
      </div>
      <div className={styles.img_container}>
        {<img src={image.src} alt={image.src} />}
      </div>
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={() => updateCarousel()}>Press Me</button>
      </div>
    </div>
  );
}
