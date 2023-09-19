import styles from "./rectangle-instance.module.css";

const RectangleInstance = () => {
  return (
    <div className={styles.instanceParent}>
      <div className={styles.rectangleParent}>
        <button className={styles.instanceChild} />
        <img className={styles.instanceItem} alt="" src="/polygon-2.svg" />
      </div>
    </div>
  );
};

export default RectangleInstance;
