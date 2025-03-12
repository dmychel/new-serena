import styles from "/src/styles/index.module.scss";

export default function Carousel() {
  const arr = [
    {
      src: "https://placehold.co/600x400",
      alt: "Placeholder Img",
    },
    {
      src: "https://placehold.co/600x400",
      alt: "Placeholder Img",
    },
  ];
  return (
    <div className={styles.carousel}>
      {arr.map((img, index) => {
        return (
          <div className={styles.img_container} key={index}>
            <img src={img.src} alt={img.alt} />
          </div>
        );
      })}
    </div>
  );
}
