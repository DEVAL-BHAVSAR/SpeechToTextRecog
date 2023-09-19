import styles from "./rectangle-instance4.module.css";

const RectangleInstance4 = () => {
  return (
    <div className={styles.instanceParent}>
      <div className={styles.rectangleParent}>
        <button className={styles.instanceChild} />
        <img className={styles.instanceItem} alt="" src="/polygon-22.svg" />
      </div>
    </div>
  );
};

export default RectangleInstance4;
